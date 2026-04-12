// 右クリック禁止
document.addEventListener("contextmenu", function(e) { e.preventDefault(); });

// ===== TTS（MP3 再生）=====
(function () {
  var TTS_SVG =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
      '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>' +
      '<path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>' +
      '<path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>' +
    '</svg>';

  // テキスト → MP3ファイル名に変換
  function textToFilename(text) {
    return text.toLowerCase()
      .replace(/['']/g, '')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_|_$/g, '') + '.mp3';
  }

  // ボタン HTML を生成（day.html / list.html の innerHTML 構築で使用）
  window.ttsBtnHtml = function (text) {
    var escaped = String(text || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    return '<button class="tts-btn" data-speak="' + escaped + '" aria-label="読み上げ">' + TTS_SVG + '</button>';
  };

  var currentAudio = null;

  // イベント委譲でクリック処理
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.tts-btn');
    if (!btn) return;

    var text = btn.dataset.speak;
    if (!text) return;

    // 再生中のオーディオを停止
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    document.querySelectorAll('.tts-btn.speaking').forEach(function (b) {
      b.classList.remove('speaking');
    });

    var filename = textToFilename(text);
    var audio = new Audio('audio/' + filename);
    currentAudio = audio;
    btn.classList.add('speaking');
    audio.onended  = function () { btn.classList.remove('speaking'); };
    audio.onerror  = function () { btn.classList.remove('speaking'); };
    audio.play();
  });
})();

// ===== 検索オーバーレイ =====
(function () {
  var headerInner = document.querySelector('.header-inner');
  if (!headerInner) return;

  // 検索ボタンをヘッダーに追加
  var btn = document.createElement('button');
  btn.className = 'search-btn';
  btn.setAttribute('aria-label', '検索');
  btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  btn.onclick = openSearch;
  headerInner.appendChild(btn);

  // オーバーレイを body に追加
  var overlay = document.createElement('div');
  overlay.id = 'search-overlay';
  overlay.className = 'search-overlay';
  overlay.innerHTML =
    '<div class="search-modal">' +
      '<div class="search-modal-header">' +
        '<span class="search-modal-title">検索</span>' +
        '<button class="search-close" id="search-close-btn">✕</button>' +
      '</div>' +
      '<input type="text" id="search-input" class="search-input" placeholder="フレーズ・日本語・カタカナで検索...">' +
      '<div id="search-results" class="search-results"></div>' +
    '</div>';
  document.body.appendChild(overlay);

  document.getElementById('search-close-btn').onclick = closeSearch;
  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeSearch(); });
  document.getElementById('search-input').addEventListener('input', function () { doSearch(this.value); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSearch(); });

  function openSearch() {
    overlay.style.display = 'flex';
    var input = document.getElementById('search-input');
    input.value = '';
    document.getElementById('search-results').innerHTML = '<p class="search-hint">キーワードを入力してください</p>';
    setTimeout(function () { input.focus(); }, 50);
  }

  function closeSearch() {
    overlay.style.display = 'none';
  }

  function doSearch(query) {
    var resultsEl = document.getElementById('search-results');
    query = query.trim();
    if (!query) {
      resultsEl.innerHTML = '<p class="search-hint">キーワードを入力してください</p>';
      return;
    }
    if (typeof DATA === 'undefined') {
      resultsEl.innerHTML = '<p class="search-hint">データを読み込み中...</p>';
      return;
    }
    var q = query.toLowerCase();
    var results = [];

    DATA.months.forEach(function (month) {
      month.lessons.forEach(function (lesson) {
        lesson.learn.forEach(function (item) {
          var text = [item.phrase, item.jp].join(' ').toLowerCase();
          if (text.indexOf(q) >= 0) {
            results.push({ type: 'learn', phrase: item.phrase, jp: item.jp, month: month.no, lesson: lesson.no, day: lesson.day });
          }
        });
        lesson.listen.forEach(function (item) {
          var text = [item.en, item.kana, item.note || '', item.example || ''].join(' ').toLowerCase();
          if (text.indexOf(q) >= 0) {
            results.push({ type: 'listen', phrase: item.en, jp: item.kana, month: month.no, lesson: lesson.no, day: lesson.day });
          }
        });
      });
    });

    if (!results.length) {
      resultsEl.innerHTML = '<p class="search-hint">「' + esc(query) + '」に一致する結果が見つかりませんでした</p>';
      return;
    }

    var html = '<p class="search-count">' + results.length + ' 件見つかりました</p>';
    results.forEach(function (r) {
      var badge = r.type === 'learn'
        ? '<span class="sr-badge sr-badge-learn">📖 学習</span>'
        : '<span class="sr-badge sr-badge-listen">🎧 リスニング</span>';
      var loc = 'Month ' + r.month + ' レッスン ' + r.lesson + '（' + r.day + '）';
      html +=
        '<a href="day.html?m=' + r.month + '&l=' + r.lesson + '" class="sr-item" onclick="document.getElementById(\'search-overlay\').style.display=\'none\'">' +
          '<div class="sr-top">' + badge + '<span class="sr-loc">' + esc(loc) + '</span></div>' +
          '<div class="sr-phrase">' + esc(r.phrase) + '</div>' +
          '<div class="sr-jp">' + esc(r.jp) + '</div>' +
        '</a>';
    });
    resultsEl.innerHTML = html;
  }

  function esc(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  window.openSearch  = openSearch;
  window.closeSearch = closeSearch;
})();
