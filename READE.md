YOUR / PORTFOLIO　編集・操作ガイド
====================================

この説明書は、現在の index.html（2026年9月時点）を基準にしています。
このサイトは「1枚の index.html」から各画面を表示し、キャラクター情報と創作スタンスだけを data フォルダの別ファイルから読み込む構成です。


【1. ファイル構成】

portfolio/
├─ index.html                 サイト本体。デザイン、HOME、作品一覧、画面切替など
├─ READE.txt                  この説明書
├─ data/
│  ├─ oc.js                  OCキャラクターのプロフィール・衣装・作品・動画・音楽
│  ├─ trpg.js                TRPGキャラクターのプロフィール・衣装・作品・動画・音楽
│  └─ stance.js              「創作スタンス」「ご依頼について」の文章
├─ images/
│  ├─ about.webp             HOMEのABOUT欄に表示する画像
│  ├─ contact.webp           HOMEの「ご依頼について」欄の背景画像
│  ├─ header/
│  │  ├─ header01_pc.webp    HOMEヘッダー1枚目・PC用
│  │  ├─ header01_sp.webp    HOMEヘッダー1枚目・スマホ用
│  │  ├─ header02_pc.webp    HOMEヘッダー2枚目・PC用
│  │  ├─ header02_sp.webp    HOMEヘッダー2枚目・スマホ用
│  │  ├─ header03_pc.webp    HOMEヘッダー3枚目・PC用
│  │  └─ header03_sp.webp    HOMEヘッダー3枚目・スマホ用
│  ├─ selected/
│  │  ├─ selected01.webp     HOME「SELECTED WORKS」の1枚目
│  │  ├─ selected02.webp     HOME「SELECTED WORKS」の2枚目
│  │  ├─ selected03.webp     HOME「SELECTED WORKS」の3枚目
│  │  ├─ selected04.webp     HOME「SELECTED WORKS」の4枚目
│  │  ├─ selected05.webp     HOME「SELECTED WORKS」の5枚目
│  │  └─ selected06.webp     HOME「SELECTED WORKS」の6枚目
│  ├─ illustration/          ILLUSTRATION一覧用の作品画像
│  └─ （任意のフォルダ）     キャラ立ち絵、表情差分、作品、動画サムネイル等
└─ videos/                   オリジナル動画を置く場合の推奨フォルダ

重要：ファイル名と大文字・小文字は完全に一致させてください。
GitHub Pagesでは「Header01.webp」と「header01.webp」は別ファイルとして扱われます。


【2. index.html が担当している機能】

■ デザイン
色、文字サイズ、余白、PC・スマホ表示、アニメーションなどのCSSが入っています。
見た目だけを変更したい場合は、主に index.html 前半の <style> ～ </style> を編集します。

■ ページの土台
HOME、OC/TRPG一覧、キャラクター詳細、ILLUSTRATION、STANCEの表示枠が入っています。
実際には別ページへ移動せず、URL末尾の「#～」に応じて表示部分を切り替えています。

  #home               → HOME
  #characters         → OC/TRPG一覧
  #oc-character-0     → OCの1人目
  #trpg-character-0   → TRPGの1人目
  #works              → ILLUSTRATION
  #contact            → STANCE／ご依頼について

■ SITE設定
index.html内の「const SITE = {」から「編集する場所はここまで！」までが、普段もっとも編集する場所です。
ここを変更するとHOME、SNS、連絡先、SELECTED WORKS、ILLUSTRATIONへ反映されます。

■ 自動表示処理
SITE、oc.js、trpg.js、stance.jsに書いたデータをHTMLへ変換して表示します。
メニュー開閉、画像スライダー、カテゴリ切替、衣装・表情差分、作品拡大、動画・YouTube再生も index.html が担当します。

■ 軽量化
oc.js、trpg.js、stance.jsは必要になった時だけ読み込みます。
YouTubeも最初から埋め込まず、サムネイルを押した時だけプレイヤーを読み込みます。


【3. HOMEを変更する】

index.html内で「const SITE = {」を検索し、home: { ～ } の内容を編集します。

siteName       ヘッダーとブラウザタブに表示するサイト名
footer         フッターの著作権表記
kicker         肩書き
titleTop       巨大タイトルの上段
titleBottom    巨大タイトルの下段
credit         名前表記
year           年
taglineJa      日本語キャッチコピー
text           英文キャッチコピー
aboutJa        ABOUTの日本語文
aboutEn        ABOUTの英文
aboutSubcopy   肩書きの補足
tags           ABOUTに並ぶタグ
news           HOMEに固定表示するお知らせ
ctaTitle       ご依頼欄の英語見出し
ctaCopy        ご依頼欄の日本語見出し

例：
  siteName: "NICOLAS / PORTFOLIO",
  titleTop: "NICO",
  titleBottom: "LAS",

文字を変更して保存し、GitHubへアップロードすると表示も変わります。


【4. HOMEヘッダー画像を変更する】

images/header/ に同名のWebP画像を上書きします。

  header01_pc.webp ＋ header01_sp.webp ＝ 1組目
  header02_pc.webp ＋ header02_sp.webp ＝ 2組目
  header03_pc.webp ＋ header03_sp.webp ＝ 3組目

pcは横長画像、spはスマホ向けの縦長画像がおすすめです。
同じ名前で上書きするだけなら index.html の編集は不要です。

枚数を増やす場合は SITE.home.headerImages に次の1組を追加します。

  {
    pc: "images/header/header04_pc.webp",
    sp: "images/header/header04_sp.webp"
  }

直前の項目との間にカンマ「,」が必要です。


【5. ABOUT・ご依頼欄の画像を変更する】

同名ファイルで上書きする場合：

  images/about.webp    → ABOUT画像
  images/contact.webp  → ご依頼欄の背景画像

別名にする場合はSITE.home内も変更します。

  aboutImage: "images/新しい名前.webp",
  contactImage: "images/新しい名前.webp",


【6. HOMEのSELECTED WORKSを変更する】

画像だけ変更したい場合は images/selected/ の selected01.webp ～ selected06.webp を同名で上書きします。

作品名なども変更したい場合は SITE.home.selectedWorks を編集します。

  {
    image: "images/selected/selected01.webp",
    category: "ORIGINAL",
    title: "作品名",
    sub: "Illustration"
  }

image      画像の場所
category   カード上部の分類
title      作品名
sub        補足

注意：SELECTED WORKSとILLUSTRATION一覧は別管理です。
片方へ画像を追加しても、もう片方へ同じ作品が自動追加されるわけではありません。


【7. NEWSの仕組み】

SITE.home.news に書いた項目は固定NEWSとして表示されます。

  { date: "2026.09.13", text: "サイトを更新しました" },

さらにGitHub Pages上では、次の画像やデータがGitHubで最後に更新された日時を取得し、NEWSへ自動追加します。

・SELECTED WORKSの画像
・ILLUSTRATIONの画像
・OC/TRPGキャラクターの更新

AcodeのローカルプレビューではGitHub上の日時を取得せず、確認用のローカル日付を使うことがあります。
GitHubへアップロードしてから本番ページも確認してください。


【8. SNS・メールアドレスを変更する】

SITE.socials       → HOME下部などの短いSNSリンク
SITE.contact       → STANCE末尾のCONTACTリンク

例：
  { label: "X", url: "https://x.com/ユーザー名" },
  { label: "pixiv", url: "https://www.pixiv.net/users/番号" },
  { label: "mail", url: "mailto:メールアドレス" }

現在の「#」は仮リンクです。公開前に実際のURLへ変更してください。


【9. ILLUSTRATION一覧を変更する】

現在の添付 index.html では、images/illustration/へ画像を入れただけでは一覧に自動追加されません。
SITE.worksへ作品データを1件追加する必要があります。

  {
    title: "作品名",
    year: "2026 / Illustration",
    group: "oc",
    category: "rp",
    image: "images/illustration/作品名.webp",
    full: "images/illustration/作品名_full.webp"
  }

title      画面に表示する作品名
year       年や補足
group      "oc"ならOC側、"trpg"ならTRPG側
category   OCの小分類。"rp"または"character"。TRPGでは""
image      通常表示用画像
full       タップ時に開く高解像度画像

分類の対応：

  group: "oc", category: "rp"         → ORIGINAL RP PROJECT
  group: "oc", category: "character"  → ORIGINAL CHARACTER
  group: "trpg", category: ""          → TRPG

fullを別に用意しない場合は、imageと同じパスを指定して構いません。

重要：現在のSITE.worksには .jpg のテスト画像が8件指定されています。
画像本体をWebPへ変更する場合は、ファイルだけでなく image/full の末尾も「.webp」に変更してください。

作品を増やす時は、直前の「}」の後にカンマを入れてから次の「{ ～ }」を追加します。
消す時は対象の「{ ～ }」をひとかたまりで削除します。


【10. OC／TRPGキャラクターを変更する】

OCは data/oc.js、TRPGは data/trpg.js を編集します。
index.htmlは、次の名前の配列を読み込みます。

  data/oc.js    → window.OC_CHARACTERS = [ ... ];
  data/trpg.js  → window.TRPG_CHARACTERS = [ ... ];

基本形：

  {
    name: "キャラクター名",
    sub: "英字名や肩書き",
    listSub: "一覧カードの補足",
    category: "character",
    themeColor: "#2f6bff",
    age: "20",
    height: "180cm",
    role: "ROLE",
    color: "BLUE",
    text: "プロフィール本文",
    icon: "images/characters/名前/icon.webp",

    outfits: [ ... ],
    artworks: [ ... ],
    videos: [ ... ],
    music: [ ... ]
  }

categoryはOCだけで使います。

  category: "character"  → ORIGINAL CHARACTER
  category: "rp"         → ORIGINAL RP PROJECT

一覧の表示順は、oc.js／trpg.jsに書いた順番です。
新しいキャラを増やす時は配列内へ「{ ～ }」を1件追加します。


【11. 衣装と表情差分を追加する】

キャラクターデータ内の outfits を編集します。

  outfits: [
    {
      name: "DEFAULT",
      image: "images/characters/名前/default.webp",
      expressions: [
        {
          name: "NORMAL",
          image: "images/characters/名前/face_normal.webp"
        },
        {
          name: "SMILE",
          image: "images/characters/名前/face_smile.webp"
        }
      ]
    }
  ]

衣装カードを押す      → その衣装へ切り替わる
表情差分を押す        → 大きい立ち絵がその表情へ切り替わる
プロフィールへ戻る    → 最後に選んだ画像がプロフィールにも反映される

透過立ち絵はWebPまたはPNGを使用できます。


【12. キャラクター別の作品を追加する】

キャラクターデータ内の artworks を編集します。

  artworks: [
    {
      title: "作品名",
      image: "images/characters/名前/art01.webp",
      full: "images/characters/名前/art01_full.webp"
    }
  ]

imageは通常表示、fullはタップ拡大時の高解像度画像です。
画像を横へスワイプすると次の作品へ移動します。
fullは作品をタップした時に初めて読み込まれます。


【13. オリジナル動画を追加する】

キャラクターデータ内の videos を編集します。

  videos: [
    {
      title: "動画タイトル",
      sub: "ORIGINAL VIDEO",
      poster: "images/characters/名前/movie01.webp",
      file: "videos/movie01.mp4"
    }
  ]

poster    再生前のサムネイル
file      MP4動画の場所

サムネイルを押した時だけ動画を読み込みます。
MOVIEとMUSICを切り替えたり横スワイプしたりすると一時停止し、プロフィールへ戻ると再生画面がリセットされます。


【14. YouTube音楽を追加する】

キャラクターデータ内の music を編集します。

  music: [
    {
      title: "曲名",
      artist: "アーティスト名",
      embedUrl: "https://www.youtube.com/embed/動画ID"
    }
  ]

重要：通常の視聴URLではなく、基本的には embed URLを指定してください。

  通常URL： https://www.youtube.com/watch?v=ABCDEFG
  埋込URL： https://www.youtube.com/embed/ABCDEFG

最初はYouTubeサムネイルだけを表示し、押した時にiframeを読み込んで自動再生します。
現在の添付 index.html ではYouTubeサムネイルに hqdefault.jpg を使用しています。これはYouTube側の画像URLなので、手元の作品画像をWebP管理していても問題ありません。


【15. 創作スタンス／ご依頼についてを変更する】

data/stance.jsを編集します。
index.htmlは window.STANCE_DATA を読み込みます。

基本形：

  window.STANCE_DATA = {
    intro: {
      eyebrow: "CREATIVE STANCE",
      title: "創作スタンス",
      tags: ["ILLUSTRATION", "CHARACTER DESIGN"],
      text: "最初に表示する説明文"
    },
    sections: [
      {
        no: "01",
        title: "見出し",
        jp: "日本語の補足",
        tone: "normal",
        content: `<p>本文</p>`
      },
      {
        no: "02",
        title: "ご依頼について",
        jp: "CONTACT",
        tone: "alert",
        content: `<p>依頼条件や注意事項</p>`
      }
    ]
  };

項目の見出しを押すと本文が開きます。
一度に開ける項目は1つだけです。
tone: "alert" にすると注意項目用の見た目になります。
contentはHTMLとして表示されるため、改行やリンクには <p>、<br>、<a> などを使用できます。


【16. Acodeで編集して反映する手順】

1. Acodeで対象ファイルを開く
2. 文章・画像パス・データを編集する
3. 保存する
4. Acodeのプレビューで大まかな表示を確認する
5. index.html、data、images、videosの変更ファイルをGitHubへアップロードする
6. GitHub PagesのURLを開き直す
7. 古い表示が残る場合はブラウザを再読み込みする

GitHub PagesのURLを「portfolio/」だけで開きたい場合、公開フォルダの直下に必ず index.html という名前で置きます。
別名（例：index_new.html）のままでは、URL末尾へそのファイル名を付けない限り表示されません。


【17. GitHubへアップロードする時の注意】

・フォルダ構成を崩さない
・index.htmlだけでなく、追加・変更した画像やdataファイルもアップロードする
・同名画像の差し替え時は、GitHub上で上書きされたことを確認する
・画像パスは「images/...」のような相対パスのまま使う
・ファイル名に半角スペースや特殊記号をなるべく使わない
・英数字、ハイフン、アンダーバー、日本語を使用する
・拡張子を書き換えただけでは画像形式は変換されない

例：sample.jpgをsample.webpへ名前変更するだけではWebP化されません。
画像編集アプリ等で本当にWebP形式として書き出してください。


【18. 変更が反映されない時の確認】

■ 画像が出ない
・画像が指定したフォルダにあるか
・大文字・小文字、拡張子まで一致しているか
・HTML／JS側が .webp なのに画像本体が .jpg のままではないか
・「images/images/...」のようにフォルダ名を重複させていないか

■ OC／TRPGが出ない
・data/oc.js、data/trpg.jsがindex.htmlと同じ階層のdataフォルダにあるか
・先頭が window.OC_CHARACTERS = [ または window.TRPG_CHARACTERS = [ になっているか
・カンマ、引用符、[ ]、{ }が抜けていないか

■ STANCEが出ない
・data/stance.jsが存在するか
・window.STANCE_DATA = { ... }; の形になっているか

■ YouTubeが出ない
・embedUrlが設定されているか
・動画IDが正しいか
・YouTube側で埋め込みが許可されている動画か

■ GitHub Pagesだけ古い
・GitHubへのアップロード完了を確認する
・数分待って再読み込みする
・ブラウザのキャッシュを削除するか、URL末尾へ一時的に「?v=2」を付けて確認する


【19. 安全に編集するコツ】

・大きく変更する前に index.html のコピーを保存する
・一度に大量変更せず、1項目ずつ保存してプレビューする
・文字列は半角の " " で囲む
・配列の各項目の間には半角カンマ「,」を入れる
・最後の項目の後ろのカンマはあってもなくてもよい
・パスの区切りには「/」を使い、「\」は使わない
・エラーが出たら、直前に編集した箇所の引用符、カンマ、括弧を最初に確認する


【20. 現在のファイルについての注意】

このREADE.txtは、今回添付された index.html の内容をそのまま確認して作成しています。
このファイルではILLUSTRATION作品は SITE.works への手動登録方式で、作品タイトルもtitle欄へ手入力する方式です。

もし「images/illustration/へ画像を入れるだけで自動追加」「ファイル名から作品タイトルを自動整形」する別版のindex.htmlへ差し替えた場合は、ILLUSTRATIONの追加方法がこの説明書と変わります。その版では、フォルダ分けとファイル名の規則を優先してください。

====================================
以上
