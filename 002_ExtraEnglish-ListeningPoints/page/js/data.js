var DATA = {
  months: [
    {
      no: 1,
      name: "Month 1",
      icon: "📘",
      iconBg: "m1-bg",
      desc: "I told you / Come on / Would you like / bring back",
      meta: "レッスン 4回 ｜ 学習24点 ｜ リスニング24点",
      lessons: [
        {
          no: 1,
          day: "Day 1〜4",
          title: "I told you / Don't / get / Men!",
          listen: [
            { en: "Did you", kana: "ディジュ", note: "", example: "Did you get my message?" },
            { en: "I told you", kana: "アイ トウジュ", note: "", example: "I told you last night." },
            { en: "Don't call me", kana: "ドンコーミー", note: "", example: "Don't call me Gigi." },
            { en: "It's finished", kana: "イッツ フィニッシュト", note: "", example: "But it's finished." }
          ],
          learn: [
            { phrase: "I told you", jp: "昨日言ったでしょ", desc: "tell + 人 で「人に言う」",
              examples: [{ en: "I told you last night.", jp: "" }] },
            { phrase: "Don't + 動詞", jp: "〜しないで", desc: "",
              examples: [{ en: "Don't cry.　「泣かないで」", jp: "" }, { en: "Don't worry.", jp: "" }, { en: "Don't touch that.", jp: "" }] },
            { phrase: "get / got", jp: "受け取る・手に入れる", desc: "got は get の過去形",
              examples: [{ en: "Yes, I got the flowers.", jp: "" }, { en: "Yes, I got the chocolates.", jp: "" }, { en: "I got your message.", jp: "" }, { en: "I got your email", jp: "" }] },
            { phrase: "Men!", jp: "男ってほんとに…！（呆れたニュアンス）", desc: "ネイティブがよく使うリアクション表現",
              examples: [] }
          ]
        },
        {
          no: 2,
          day: "Day 8〜11",
          title: "Come on / Give me / Very you / Today!",
          listen: [
            { en: "Come on", kana: "カモン", note: "C'mon と表記されることも", example: "" },
            { en: "Let me", kana: "レミー", note: "Lemme と表記されることも", example: "" },
            { en: "What does it", kana: "ワディズィット", note: "Whaddisit と表記されることも", example: "" }
          ],
          learn: [
            { phrase: "Come on", jp: "さあ・ほら・急いで・行こう", desc: "",
              examples: [{ en: "Come on, let's go.", jp: "" }, { en: "Come on, hurry up.", jp: "" }] },
            { phrase: "Give me", jp: "〜をちょうだい・〜を渡して", desc: "",
              examples: [{ en: "Give me the book.", jp: "" }] },
            { phrase: "Very you.", jp: "あなたらしいね・いかにもあなたっぽい", desc: "",
              examples: [{ en: "That dress is very you.", jp: "" }, { en: "「youっぽい」＝ personality / style", jp: "" }] },
            { phrase: "What does it say?", jp: "何て書いてあるの？", desc: "",
              examples: [{ en: "What does the sign say?", jp: "" }] },
            { phrase: "Let me see", jp: "見せて・えっと…・考えさせて", desc: "",
              examples: [{ en: "Let me see your phone.", jp: "" }, { en: "Let me see…", jp: "" }] },
            { phrase: "Today!", jp: "今日なの？！・今日じゃない！（驚きや強調）", desc: "Today?! = 「今日なの？！」",
              examples: [] }
          ]
        },
        {
          no: 3,
          day: "Day 15〜18",
          title: "Here's / Would you like / You mean / Come in",
          listen: [
            { en: "Oh, it's you", kana: "オイツユー", note: "", example: "" },
            { en: "Hi babes", kana: "ハイベイブズ", note: "", example: "" },
            { en: "Here's", kana: "ヒアズ", note: "", example: "" },
            { en: "You mean", kana: "ユミーン", note: "", example: "" },
            { en: "Would you", kana: "ウッジュ", note: "", example: "" },
            { en: "Uh-huh", kana: "アハ", note: "", example: "" },
            { en: "Oh yeah", kana: "オウイェア", note: "", example: "" },
            { en: "What's she", kana: "ワッシー", note: "", example: "" },
            { en: "Why don't I", kana: "ワイノナイ", note: "", example: "" },
            { en: "I've told you", kana: "アイヴ トウジュ", note: "", example: "" },
            { en: "Is that", kana: "イズダッ", note: "", example: "" },
            { en: "Come in", kana: "カミン", note: "", example: "" }
          ],
          learn: [
            { phrase: "Here's ～", jp: "はい、どうぞ・これが〜です", desc: "Here is の短縮形",
              examples: [{ en: "Here's your milk.", jp: "" }, { en: "Here's your coffee.", jp: "" }, { en: "Here's your bag.", jp: "" }] },
            { phrase: "I forget nothing.", jp: "ちゃんと覚えてるよ・忘れない主義なんだ", desc: "直訳「私は何も忘れない」",
              examples: [] },
            { phrase: "Would you like ～ ?", jp: "〜はいかがですか？", desc: "丁寧に相手を誘う表現",
              examples: [{ en: "Would you like a drink?", jp: "" }, { en: "Would you like some coffee?", jp: "" }, { en: "Would you like some tea?", jp: "" }] },
            { phrase: "What's she like?", jp: "どんな人？（性格や雰囲気）", desc: "",
              examples: [] },
            { phrase: "Why don't I ～ ?", jp: "私が〜しようか？", desc: "",
              examples: [{ en: "Why don't I show you?", jp: "" }] },
            { phrase: "I am called ～", jp: "私は〜と呼ばれています", desc: "My name is ～ と同じ意味。日常会話では I'm ～ の方が自然",
              examples: [{ en: "I am called Hector.", jp: "" }] },
            { phrase: "You mean ～", jp: "つまり〜ってこと？・〜って言いたいの？", desc: "",
              examples: [{ en: "You mean you're quitting your job?", jp: "つまり仕事辞めるってこと？" }, { en: "You mean this is all free?", jp: "つまりこれ全部無料ってこと？" }] },
            { phrase: "Come in", jp: "どうぞ入って！", desc: "",
              examples: [{ en: "Come in!", jp: "" }] },
            { phrase: "スペルで強調する言い方", jp: "単語をスペルで言って強調する表現", desc: "",
              examples: [{ en: "O-U-T, out!", jp: "" }] }
          ]
        },
        {
          no: 4,
          day: "Day 22〜29",
          title: "bring back / play with / going to / What are we going to do?",
          listen: [
            { en: "brought our", kana: "ブロウラ", note: "", example: "brought our milk back" },
            { en: "play with", kana: "「th 弱化」", note: "", example: "play with cars" },
            { en: "I live in", kana: "アイリヴィン", note: "", example: "I live in a museum" },
            { en: "What are we", kana: "ワラウィ", note: "", example: "What are we going to do?" },
            { en: "going to", kana: "ゴナ (gonna)", note: "カジュアルな場面のみ使用", example: "What are we going to do? → ワラウィ ゴナ ドゥ？" }
          ],
          learn: [
            { phrase: "bring ～ back", jp: "〜を返す・〜を持って戻る", desc: "",
              examples: [{ en: "He brought our milk back from three weeks ago.", jp: "" }, { en: "Bring the book back tomorrow.", jp: "明日持ってきてください。" }] },
            { phrase: "play with ～", jp: "〜で遊ぶ", desc: "",
              examples: [{ en: "I play with cars.", jp: "" }, { en: "play with toys", jp: "" }, { en: "play with a ball", jp: "" }] },
            { phrase: "I live in ～", jp: "〜に住んでいる", desc: "",
              examples: [{ en: "I live in a museum.", jp: "" }, { en: "I live in Tokyo.", jp: "" }] },
            { phrase: "We only have ～", jp: "〜しかありません", desc: "",
              examples: [{ en: "We only have one bedroom.", jp: "" }, { en: "I only have ten minutes.", jp: "10分しかありません。" }] },
            { phrase: "What are we going to do?", jp: "どうしましょう？", desc: "困ったときによく使うフレーズ",
              examples: [] }
          ]
        }
      ]
    },
    {
      no: 2,
      name: "Month 2",
      icon: "📗",
      iconBg: "m2-bg",
      desc: "Bring it up / Show me / No way / Let's",
      meta: "レッスン 4回 ｜ 学習23点 ｜ リスニング12点",
      lessons: [
        {
          no: 1,
          day: "Day 3〜10",
          title: "Bring it up / next door / Fish and chips",
          listen: [
            { en: "Who are you", kana: "フーユー", note: "フーアーユー → フーユー", example: "" },
            { en: "next door", kana: "ネクスドア", note: "", example: "" },
            { en: "would you", kana: "ウッジュ", note: "", example: "What would you like?" }
          ],
          learn: [
            { phrase: "Bring it up", jp: "話題を持ち出す・（上に）持ってくる", desc: "bring it up = ①（話題を）持ち出す　②（上に）持ってくる（文脈限定）",
              examples: [{ en: "Bring it up, please.", jp: "" }] },
            { phrase: "I live next door.", jp: "隣に住んでいます", desc: "next door = 「隣」",
              examples: [{ en: "She lives next door.", jp: "" }] },
            { phrase: "What would you like ～ ?", jp: "何が欲しいですか？（丁寧）", desc: "丁寧に「何が欲しいですか？」「何を食べたいですか？」",
              examples: [{ en: "What would you like to eat?", jp: "" }, { en: "What would you like to drink?", jp: "" }] },
            { phrase: "Fish and chips", jp: "イギリスの有名な料理", desc: "このシーンでは Hector が Fish and ships と聞き間違えています。",
              examples: [] }
          ]
        },
        {
          no: 2,
          day: "Day 17〜20",
          title: "This is / likes / Can you / Show me / Adios amigo",
          listen: [
            { en: "This is", kana: "ディズィズ", note: "", example: "This is the oven." },
            { en: "dog is", kana: "ドギズ", note: "「z音」強調", example: "The dog is in the oven." },
            { en: "go on", kana: "ゴーオン", note: "", example: "" },
            { en: "show me", kana: "ショミー", note: "", example: "" }
          ],
          learn: [
            { phrase: "This is ～", jp: "これは〜です", desc: "",
              examples: [{ en: "This is the oven.", jp: "" }, { en: "This is the kitchen.", jp: "" }, { en: "This is my room.", jp: "" }] },
            { phrase: "in the ～", jp: "〜の中に", desc: "",
              examples: [{ en: "The book is in the bag.", jp: "" }] },
            { phrase: "likes ～", jp: "〜が好き（三人称単数）", desc: "like の三人称単数",
              examples: [{ en: "Bridget likes strong men.", jp: "" }, { en: "She likes coffee.", jp: "" }] },
            { phrase: "Can you ～ ?", jp: "〜できますか？", desc: "",
              examples: [{ en: "Can you cycle fifty kilometres?", jp: "" }, { en: "Can you swim?", jp: "" }, { en: "Can you drive?", jp: "" }] },
            { phrase: "Show me", jp: "見せて", desc: "",
              examples: [{ en: "Show me.", jp: "" }, { en: "Show me the picture.", jp: "" }] },
            { phrase: "Adios, amigo!", jp: "じゃあな、友よ！", desc: "スペイン語表現を冗談っぽく使っている",
              examples: [] }
          ]
        },
        {
          no: 3,
          day: "Day 20〜27",
          title: "No way / Be my guest / We have a problem / Ricky Martin",
          listen: [
            { en: "how do you", kana: "ハウジュ", note: "", example: "How do you say…?" },
            { en: "need a", kana: "ニーダ", note: "need の最後の d と a がつながる", example: "I need a shower." },
            { en: "come out", kana: "カマウト", note: "", example: "Come out." }
          ],
          learn: [
            { phrase: "How do you say ～ ?", jp: "〜は英語でどう言いますか？", desc: "",
              examples: [{ en: "How do you say this in English?", jp: "" }] },
            { phrase: "Be my guest!", jp: "どうぞ・遠慮しないで", desc: "",
              examples: [{ en: "Can I use your phone?", jp: "" }, { en: "→ Be my guest.", jp: "" }] },
            { phrase: "No way!", jp: "絶対無理・ありえない", desc: "",
              examples: [] },
            { phrase: "spare room", jp: "空いている部屋・予備の部屋", desc: "",
              examples: [{ en: "We have a spare room.", jp: "" }] },
            { phrase: "You want me.", jp: "呼びましたか？・私に用ですか？", desc: "",
              examples: [{ en: "Yes, you want me.", jp: "" }] },
            { phrase: "We think…", jp: "言いにくいことを話す前置き", desc: "",
              examples: [{ en: "We think we have a problem.", jp: "" }] },
            { phrase: "We have a problem.", jp: "問題があります", desc: "",
              examples: [] },
            { phrase: "It's like this.", jp: "事情はこうです・つまりこういうことです", desc: "",
              examples: [] },
            { phrase: "Can I have a word?", jp: "ちょっと話せますか？", desc: "",
              examples: [{ en: "Can I have a word, please?", jp: "" }] },
            { phrase: "Go on then.", jp: "じゃあ言ってみて", desc: "",
              examples: [] },
            { phrase: "Ricky Martin", jp: "セクシーでかっこいいラテン系男性の象徴として使われる", desc: "（比喩表現として使用）",
              examples: [] }
          ]
        },
        {
          no: 4,
          day: "Day 31〜",
          title: "keep it a secret / Let's",
          listen: [
            { en: "sort of", kana: "ソータ / ソーダ", note: "sorta のように聞こえることも。t / d が「ラ行っぽい音」になる", example: "sort of music" },
            { en: "I'll get it", kana: "アイルゲリッ", note: "", example: "" }
          ],
          learn: [
            { phrase: "keep it a secret", jp: "秘密にしておく", desc: "",
              examples: [{ en: "Keep this secret.", jp: "" }] },
            { phrase: "Let's ～", jp: "〜しよう", desc: "",
              examples: [{ en: "Let's get some coffee.", jp: "コーヒー飲もう" }, { en: "Let's take a break.", jp: "ちょっと休もう" }] }
          ]
        }
      ]
    },
    {
      no: 3,
      name: "Month 3",
      icon: "📙",
      iconBg: "m3-bg",
      desc: "Must go! / I'll / You need / Guess what?",
      meta: "レッスン 6回 ｜ 学習38点 ｜ リスニング36点",
      lessons: [
        {
          no: 1,
          day: "Day 11",
          title: "What's he like? / Must go! / I have a cold / Never mind",
          listen: [
            { en: "Don't you", kana: "Doncha", note: "don't tell → ドゥンテル（t が弱くなる）", example: "don't tell Bridget" },
            { en: "Would you", kana: "Wouldja", note: "", example: "Would you like some…" },
            { en: "Want to", kana: "Wanna", note: "Must go / Gotta go（gotta = got to → ガラ）と似た音変化", example: "" },
            { en: "And so have I", kana: "アンソーヴァイ", note: "have が「ハヴ」じゃなく「ヴ」寄り", example: "" },
            { en: "Rise and shine", kana: "ライゼンシャイン", note: "and → エン / アン（弱くなる）", example: "" },
            { en: "Good morning", kana: "グッモーニン", note: "g がほぼ消える（morning → モーニン）", example: "" },
            { en: "Psst", kana: "（小声の「ねえ！」）", note: "音だけの表現", example: "" },
            { en: "Ah-ah-ah", kana: "（ダメダメ）", note: "ネイティブ特有の「ダメダメ」ニュアンス", example: "" }
          ],
          learn: [
            { phrase: "What's he like?", jp: "彼ってどんな人？", desc: "人の性格・印象を聞く超定番フレーズ",
              examples: [{ en: "What's your boss like?", jp: "あなたの上司ってどんな人？" }] },
            { phrase: "Must go!", jp: "もう行かなきゃ！", desc: "主語（I）を省略するカジュアル表現。元の形: I must go.",
              examples: [{ en: "Gotta go!", jp: "もう行くね！" }] },
            { phrase: "Wakey-wakey / Rise and shine", jp: "起きて起きて / さあ起きて元気出して", desc: "人を起こすときのネイティブ表現\nwakey-wakey = 起きて起きて（子供っぽく可愛い）\nrise and shine = さあ起きて元気出して",
              examples: [{ en: "Hector, wakey-wakey.", jp: "" }, { en: "Come on, rise and shine.", jp: "" }, { en: "Wake up, sleepyhead.", jp: "起きてよ、寝ぼけさん" }] },
            { phrase: "I have a cold.", jp: "風邪ひいた", desc: "「get」じゃなく「have」を使うのがポイント",
              examples: [{ en: "I have a headache.", jp: "頭が痛い" }] },
            { phrase: "And so have I.", jp: "私もです", desc: "「〜も同じ」のフォーマル寄り表現",
              examples: [{ en: "I like coffee. → So do I.", jp: "私もコーヒー好き" }] },
            { phrase: "Never mind.", jp: "もういいわ・気にしないで", desc: "会話を切るときの定番フレーズ",
              examples: [{ en: "Never mind, it's okay.", jp: "気にしないで" }] },
            { phrase: "Would you like some ～ ?", jp: "〜はいかがですか？", desc: "丁寧なオファー表現",
              examples: [{ en: "Would you like some… new pyjamas?", jp: "" }, { en: "Would you like some coffee?", jp: "コーヒーいかがですか？" }] }
          ]
        },
        {
          no: 2,
          day: "Day 15",
          title: "fancy dress / must love you / I'll / I said〜",
          listen: [
            { en: "Is it", kana: "イジット", note: "s と i がつながる", example: "Is it fancy dress?" },
            { en: "Nice car", kana: "ナイスカー", note: "r ほぼ消える。イギリス英語で r が弱い", example: "" },
            { en: "Have this", kana: "ハヴディス", note: "v + th がつながる", example: "I have this car" },
            { en: "Must love you", kana: "マスラヴユー", note: "t が消える（重要）", example: "Girls must love you" },
            { en: "Can I", kana: "キャナイ", note: "can が弱くなる", example: "Can I tell you" },
            { en: "Tell you", kana: "テリュー", note: "l + y が融合", example: "" },
            { en: "Look good", kana: "ルッ(g)グッ", note: "k が弱くなる", example: "" },
            { en: "Don't you", kana: "ドンチュ", note: "t + y = チュ系（頻出）", example: "You don't look" },
            { en: "old fashioned", kana: "オウルドファッションド", note: "d の音が弱くなり、なめらかにつながる", example: "" },
            { en: "I'll", kana: "アル", note: "will の音が弱くなり、ほぼ消える", example: "I'll take him" },
            { en: "take him", kana: "テイキム", note: "k と h がつながる（連結）", example: "" },
            { en: "It's all right", kana: "イツォーライ", note: "s と all がつながって一気に発音される", example: "" },
            { en: "I said", kana: "アイセッ", note: "d の音がほぼ聞こえなくなる", example: "" }
          ],
          learn: [
            { phrase: "Is it fancy dress?", jp: "それって仮装パーティー？", desc: "イギリス英語表現。fancy dress = 仮装（コスチューム）\n英文法の型: Is it + 名詞？",
              examples: [{ en: "Is it a party?", jp: "それパーティー？" }] },
            { phrase: "Nice car, eh.", jp: "いい車だね", desc: "eh = 「〜だよね？」の軽い同意",
              examples: [{ en: "Nice day, eh.", jp: "いい天気だね" }] },
            { phrase: "I have this car at home.", jp: "この車、家にもあるよ", desc: "have = 「持っている」",
              examples: [{ en: "I have a bike.", jp: "自転車持ってる" }] },
            { phrase: "Girls must love you.", jp: "女の子にモテるでしょ", desc: "must = 「きっと〜に違いない」（推量）\n英文法の型: must + 動詞",
              examples: [{ en: "You must be tired.", jp: "疲れてるでしょ" }, { en: "He must be busy.", jp: "彼忙しいはず" }] },
            { phrase: "Can I tell you something?", jp: "ちょっといい？（話してもいい？）", desc: "ネイティブがよく使う前置き",
              examples: [{ en: "Can I ask you something?", jp: "ちょっと聞いていい？" }, { en: "Can I say something?", jp: "ちょっと言っていい？" }] },
            { phrase: "The car looks good.", jp: "その車いい感じだね", desc: "look + 形容詞（S + look + 形容詞）",
              examples: [{ en: "You look tired.", jp: "疲れてそう" }] },
            { phrase: "You must look good too!", jp: "君もかっこいいはず！", desc: "must の推量（かなり重要）",
              examples: [] },
            { phrase: "You don't look good.", jp: "かっこよくないよ", desc: "否定形（be じゃなく look）",
              examples: [] },
            { phrase: "I can help.", jp: "手伝えるよ", desc: "can = できる",
              examples: [{ en: "I can do it.", jp: "できるよ" }, { en: "I can fix it.", jp: "直せるよ" }] },
            { phrase: "so + 形容詞（強調）", jp: "めっちゃ〜（感情や程度の強さ）", desc: "英文法の型: so + 形容詞",
              examples: [{ en: "They're so old fashioned!", jp: "すごく時代遅れ！" }, { en: "It's so good.", jp: "めっちゃいい" }, { en: "She's so kind.", jp: "すごく優しい" }] },
            { phrase: "I know（相づち）", jp: "わかってる（共感・同意）", desc: "",
              examples: [{ en: "I know, right?", jp: "だよね" }, { en: "I know what you mean.", jp: "言いたいことわかる" }] },
            { phrase: "will（その場決定）", jp: "やるよ（今その場で決めた未来）", desc: "英文法の型: I will + 動詞（重要）",
              examples: [{ en: "I'll take him shopping.", jp: "私が彼を買い物に連れていく" }, { en: "I'll call you later.", jp: "あとで電話するね" }, { en: "I'll do it.", jp: "やるよ" }] },
            { phrase: "take 人 shopping", jp: "人を買い物に連れていく", desc: "英文法の型: take + 人 + 場所 / 行動",
              examples: [{ en: "I'll take him shopping.", jp: "" }, { en: "I'll take you there.", jp: "そこに連れていくよ" }] },
            { phrase: "It's all right.", jp: "大丈夫だよ", desc: "相手を安心させる表現",
              examples: [] },
            { phrase: "It's no problem.", jp: "問題ないよ", desc: "カジュアルな安心表現",
              examples: [] },
            { phrase: "I said ～（強調）", jp: "だから〜って言ってるでしょ！", desc: "強い主張・イライラを表す\n英文法の型: I said + 文",
              examples: [{ en: "I said I'll take him shopping!!", jp: "" }] }
          ]
        },
        {
          no: 3,
          day: "Day 18",
          title: "You need / Listen to / That's not for you",
          listen: [
            { en: "You need", kana: "ユニード", note: "need の d が弱くなる", example: "You need a look" },
            { en: "listen to", kana: "リスントゥ", note: "to が弱くなる", example: "listen to me" },
            { en: "to me", kana: "トゥミ", note: "me が弱くなる", example: "" },
            { en: "That's", kana: "ザッツ", note: "that is の短縮", example: "That's not for you" },
            { en: "for you", kana: "フォーユ", note: "you が弱くなる", example: "" },
            { en: "What clothes", kana: "ワッ(ト)クローズ", note: "t が弱くなる", example: "" },
            { en: "to wear", kana: "トゥウェア", note: "to が弱くなる", example: "" }
          ],
          learn: [
            { phrase: "You need ～", jp: "あなたには〜が必要", desc: "相手にアドバイスするときの基本表現\n英文法の型: You need + 名詞",
              examples: [{ en: "You need a cowboy look.", jp: "" }, { en: "You need a break.", jp: "休んだ方がいいよ" }] },
            { phrase: "Listen to ～", jp: "〜に耳を傾けて", desc: "英文法の型: listen to + 人",
              examples: [{ en: "Listen to me.", jp: "私の言うことを聞いて" }, { en: "Listen to her.", jp: "彼女の話を聞いて" }] },
            { phrase: "That's not for you.", jp: "それはあなたには合わない", desc: "相手に合う・合わないを伝える\n英文法の型: That is not for + 人",
              examples: [{ en: "This is not for kids.", jp: "これは子供向けじゃない" }] },
            { phrase: "What ～ to V", jp: "何を〜すべきか", desc: "疑問詞＋to不定詞\n英文法の型: what + to + 動詞",
              examples: [{ en: "What clothes to wear", jp: "何を着るべきか" }, { en: "I don't know what to do.", jp: "何をすればいいかわからない" }] }
          ]
        },
        {
          no: 4,
          day: "Day 22",
          title: "On your own / Leave it to me / a pair of",
          listen: [
            { en: "pair of", kana: "ペアラ", note: "of が弱くなり「ア」に近い音になる", example: "a pair of trousers" }
          ],
          learn: [
            { phrase: "On your own?", jp: "一人で？・自分で？", desc: "英文法の型: on one's own",
              examples: [{ en: "I did it on my own.", jp: "自分でやった" }] },
            { phrase: "Leave it to me.", jp: "私に任せて", desc: "",
              examples: [{ en: "Leave it to me, I'll fix it.", jp: "任せて、直すよ" }] },
            { phrase: "Can I help you?", jp: "何かお探しですか？", desc: "店員の定番フレーズ",
              examples: [{ en: "How can I help you?", jp: "どのようにお手伝いできますか？" }] },
            { phrase: "a pair of ～", jp: "〜一着（2つで1セットのものに使う）", desc: "英文法の型: a pair of + 複数名詞",
              examples: [{ en: "a pair of trousers", jp: "" }, { en: "a pair of shoes", jp: "靴一足" }] },
            { phrase: "I think you mean ～", jp: "〜のことだと思うよ（やんわり修正）", desc: "相手の言い間違いをやんわり訂正する",
              examples: [{ en: "I think you mean a hat.", jp: "" }, { en: "I think you mean Monday.", jp: "月曜日のことだと思うよ" }] }
          ]
        },
        {
          no: 5,
          day: "Day 25",
          title: "completely / Well done / It might be",
          listen: [
            { en: "I'll just", kana: "アルジャス", note: "just の t がほぼ消えて、I'll とつながって発音される", example: "I'll just buy" },
            { en: "trousers", kana: "トラウザズ", note: "r と s が弱くなり、なめらかに発音される", example: "" }
          ],
          learn: [
            { phrase: "completely（副詞）", jp: "完全に（動詞の意味を強くする副詞）", desc: "英文法の型: completely + 動詞",
              examples: [{ en: "I completely forgot!", jp: "完全に忘れてた！" }] },
            { phrase: "need + 名詞", jp: "〜が必要だ", desc: "英文法の型: S + need + 名詞",
              examples: [{ en: "We need eggs, lemons and dog food.", jp: "卵とレモンとドッグフードが必要です" }, { en: "I need some help.", jp: "少し助けが必要です" }] },
            { phrase: "I'll do it later.", jp: "あとでやるね", desc: "今決めたことを「あとでやる」と言う表現\n英文法の型: I will + 動詞 + later",
              examples: [{ en: "I'll do it online later.", jp: "" }, { en: "I'll call you later.", jp: "あとで電話するね" }] },
            { phrase: "Well done!", jp: "よくやった！", desc: "相手をほめるときの定番表現",
              examples: [{ en: "Well done, Hector.", jp: "" }] },
            { phrase: "It might be ～", jp: "〜かもしれない", desc: "「〜かもしれない」と可能性を表す\n英文法の型: It might be + 名詞",
              examples: [{ en: "It might be the tarantula.", jp: "タランチュラかもしれない" }, { en: "It might be true.", jp: "それは本当かもしれない" }] }
          ]
        },
        {
          no: 6,
          day: "Day 29〜32",
          title: "Guess what? / I don't believe you / poor / goodbye",
          listen: [
            { en: "guess what", kana: "ゲスワッ", note: "s と w がつながる", example: "" },
            { en: "Who's that", kana: "フーズザッ", note: "that の t が弱くなる", example: "" },
            { en: "is not", kana: "イズナッ", note: "", example: "" },
            { en: "goodbye", kana: "グバイ", note: "d が弱くなる（グッバイ → グバイ）", example: "" }
          ],
          learn: [
            { phrase: "Guess what?", jp: "ねえ聞いて（会話の導入フレーズ）", desc: "",
              examples: [{ en: "Guess what? I passed.", jp: "聞いて、合格したよ" }, { en: "Guess what happened.", jp: "何があったと思う？" }] },
            { phrase: "What will S look like?", jp: "どんな見た目になるの？", desc: "未来の状態を聞く\n英文法の型: What will + 主語 + 動詞？",
              examples: [{ en: "What will he look like?", jp: "" }, { en: "What will it be like?", jp: "どんな感じになる？" }] },
            { phrase: "I don't believe you.", jp: "信じられない", desc: "相手を疑う表現",
              examples: [{ en: "I don't believe that.", jp: "それ信じない" }, { en: "I don't believe him.", jp: "彼のこと信じない" }] },
            { phrase: "also（〜も）", jp: "〜も（追加情報）", desc: "",
              examples: [{ en: "Annie has a cold also.", jp: "アニーも風邪" }, { en: "I am tired also.", jp: "私も疲れてる" }, { en: "He is here also.", jp: "彼もここにいる" }] },
            { phrase: "poor ～", jp: "かわいそうな〜（同情表現）", desc: "",
              examples: [{ en: "Poor Annie.", jp: "かわいそうなアニー" }, { en: "Poor guy.", jp: "かわいそうな人" }, { en: "Poor dog.", jp: "かわいそうな犬" }] }
          ]
        }
      ]
    }
  ]
};
