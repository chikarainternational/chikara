/**
 * YouTube Banner Injector
 * 音声・動画エリアに YouTube チャンネルバナーを差し込む
 * チャンネル情報はこの設定オブジェクトだけ変更すれば全ページに反映
 */
(function () {
  var YT = {
    channelUrl: "https://www.youtube.com/@SoCal",
    channelHandle: "@SoCal",
    channelName: "SoCal",
    avatarUrl: "https://yt3.googleusercontent.com/ytc/AIdro_m795dTA9jcg-oAFPG9Mv6tQtNG7_n8OQfcR31OjcQ_sN8=s160-c-k-c0x00ffffff-no-rj",
    bannerUrl: "https://yt3.googleusercontent.com/99NjXrLc0tOULQJeHmVSqX84DlkoriTeKTn7hBvKH6RUpYvW9OCFoHHyZfZefF5P9yQms6E6NQM=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    label: "英語コーチChikara",
    note: "10,000人以上の日本人を英語ペラペラに変えた英語コーチ 横田チカラのYouTube公式チャンネル『SoCal英会話』（ソーカル英会話）"
  };

  function buildBanner(dayText) {
    var dayLine = dayText
      ? '<div class="ytb-day">' + dayText + ' 対応エピソード</div>'
      : "";

    return (
      '<div class="section-row">' +
      '<span class="section-icon">▶</span>' +
      '<span class="section-text">YouTube</span>' +
      '<div class="section-line"></div>' +
      '</div>' +
      '<a href="' + YT.channelUrl + '" target="_blank" rel="noopener noreferrer" class="ytb-card">' +
      '<div class="ytb-banner-img" style="background-image:url(\'' + YT.bannerUrl + '\')"></div>' +
      '<div class="ytb-info-row">' +
      '<img src="' + YT.avatarUrl + '" alt="' + YT.channelName + '" class="ytb-avatar">' +
      '<div class="ytb-banner-text">' +
      '<div class="ytb-title">' + YT.label + '</div>' +
      '<div class="ytb-handle">' + YT.channelHandle + '</div>' +
      '</div>' +
      '<div class="ytb-arrow">›</div>' +
      '</div>' +
      '<div class="ytb-note">' +
      '<span class="ytb-note-icon">💡</span>' +
      '<span>' + YT.note + '</span>' +
      '</div>'
    );
  }

  function inject() {
    var banners = document.querySelectorAll(".yt-banner");
    for (var i = 0; i < banners.length; i++) {
      var day = banners[i].getAttribute("data-day") || "";
      banners[i].innerHTML = buildBanner(day);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }

  // 右クリック禁止
  document.addEventListener("contextmenu", function(e) { e.preventDefault(); });
})();
