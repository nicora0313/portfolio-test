PORTFOLIO 分割版
====================

ファイル構成：

portfolio/
├─ index.html
├─ data/
│  ├─ oc.js
│  └─ trpg.js
├─ images/
└─ videos/

編集場所
--------

OCキャラを追加・修正
→ data/oc.js

TRPGキャラを追加・修正
→ data/trpg.js

HOME / ILLUSTRATION / STANCE / デザイン変更
→ index.html


読み込みの仕組み
----------------

HOMEを開いた時：
oc.js / trpg.js はまだ読み込みません。

OCを押した時：
data/oc.js だけ読み込みます。

TRPGを押した時：
data/trpg.js だけ読み込みます。

一度読み込んだデータは、そのページを開き直しても
同じ閲覧中は再読み込みしません。


重要
----

index.html だけを単独でChromeのダウンロード画面から開くと、
data/oc.js と data/trpg.js を見つけられない場合があります。

Acodeでは portfolio フォルダごと開いてプレビューしてください。
GitHub Pagesでは、このフォルダ構成のままアップロードすれば動きます。


ILLUSTRATIONページ
------------------

ILLUSTRATIONは、

・上：選択中の作品を大きく表示
・下：作品サムネイルを横一列に表示
・サムネをタップ → 上の大画像を切替
・上の大画像をタップ → 高解像度ビュー

になっています。

index.html の SITE.works で編集します。

例：

{
  title: "WORK 01",
  year: "Illustration / 2026",
  image: "images/works/work01.webp",
  full: "images/works/full/work01.png"
}

image = 普段表示する画像
full  = 拡大時だけ読み込む高解像度画像


ILLUSTRATION テストプレイ
------------------------

このテスト版には仮作品を4枚埋め込んであります。

確認できること：

1. 下のサムネイルをタップ
   → 上の大きい作品が切り替わる

2. 上の大きい作品をタップ
   → 高解像度ビューへ切り替わる

3. 高解像度ビュー
   → 2本指ピンチで拡大縮小
   → 拡大後に1本指ドラッグ
   → ダブルタップでも拡大
   → ＋ / − / 100% ボタンも使用可能

仮画像はHTML内に直接埋め込んでいるため、
ILLUSTRATIONの挙動確認には追加画像ファイルは不要です。


ILLUSTRATION 大表示エリア固定
----------------------------

作品画像の縦横比が違っても、
上の大表示エリアの高さは固定です。

そのため、

横長作品 → 縦長作品

へ切り替えても、下のサムネイル一覧の位置は動きません。

画像は `object-fit: contain` で全体表示されます。


ILLUSTRATION 全体表示修正
------------------------

大表示エリアは高さ固定のままですが、
画像そのものは `object-fit: contain` で必ず全体表示します。

そのため：

・縦長画像 → 左右に余白が出る
・横長画像 → 上下に余白が出る
・正方形 → 枠内に全体表示

画像の縦横比が変わっても、
下のサムネイル一覧の位置は動きません。

「固定高」と「画像全体表示」を両立する仕様です。


HOME 自動スライド調整
--------------------

・1枚目 → 2枚目：ページ表示から約3秒後
・2枚目以降：6.5秒ごと
・フェード：約1.7秒
・1枚目と2枚目は eager 読み込み
・3枚目以降は lazy 読み込み

これで「最初の1→2枚目だけ妙に遅い」感じを減らしています。


STANCEページ
------------

STANCEの文章は index.html ではなく、

data/stance.js

で編集できます。

STANCEを開いた時だけ読み込まれます。

構成：

01 PROFILE
02 IMPORTANT
03 INTERACTION
04 REPLY / DM / LIST
05 RELATIONSHIP
06 PRE-ESTABLISHED
07 FA / CONTENT
08 CONTENT NOTES
09 CONTACT

01〜08はアコーディオン式です。
見出しをタップすると内容が開き、
別の項目を開くと前の項目は自動で閉じます。


衣装画面：表情差分の位置
----------------------

表情差分は、衣装一覧の下ではなく
「大きい立ち絵の直下」に表示されるよう変更しました。

スマホでの順番：

1. 大きい立ち絵
2. 表情差分
3. OUTFIT一覧

衣装を切り替えると、その衣装用の表情差分も同じ位置で切り替わります。


ILLUSTRATION カテゴリ分け
------------------------

下の作品一覧は次のタブで分けています。

OC
├─ ORIGINAL RP PROJECT
└─ ORIGINAL CHARACTER

TRPG

タブを押しても、
上の大きい作品表示エリアは1つのままです。
下のサムネイル一覧だけが切り替わります。

works の設定：

group:
  "oc"   = OC
  "trpg" = TRPG

category:
  "rp"        = ORIGINAL RP PROJECT
  "character" = ORIGINAL CHARACTER

TRPGの場合 category は "" でOKです。


MOVIE / MUSIC 自動停止
----------------------

以下のタイミングで、再生中の動画・曲を自動停止します。

・別のMOVIEを再生した時
・別のMUSICを再生した時
・MOVIE ↔ MUSIC を切り替えた時
・横スワイプで別項目へ移動した時
・ドットで別項目へ移動した時
・←でプロフィール画面へ戻った時
・メニュー等で別ページへ移動した時

YouTubeはiframe自体をリセットするため、
画面を離れた後も音だけ残る状態を防ぎます。


MOVIE / MUSIC 再生位置保持
-------------------------

以下の操作では再生を止めますが、0秒には戻しません。

・MOVIE ↔ MUSIC 切替
・横スワイプ
・ドット切替
・別のMOVIE / MUSICを再生
・プロフィールへ戻る
・別ページへ移動

戻って再生すると、止めた位置から続けられます。

YouTubeは iframe を消さず pauseVideo を送り、
自作動画は video.pause() のみ使用しています。


MEDIA 再生位置ルール
-------------------

・MOVIE ↔ MUSIC 切替
・横スワイプ
・ドット切替
・別のMOVIE / MUSICを再生

→ 一時停止して再生位置を保持します。

・←でプロフィールへ戻る

→ MEDIA画面を完全リセットします。
   次に開いた時は最初からです。


OC一覧カテゴリタブ
----------------

OC一覧は以下の2タブに分けています。

ORIGINAL RP PROJECT
ORIGINAL CHARACTER

キャラクターの分類は data/oc.js で指定します。

例：

category: "rp"
→ ORIGINAL RP PROJECT

category: "character"
→ ORIGINAL CHARACTER

categoryを省略した場合は
ORIGINAL CHARACTERとして表示されます。

今いる既存キャラ4人は
ORIGINAL CHARACTERに設定しています。


CHARACTER一覧のタブ構成
---------------------

上段：
OC / TRPG

OCを選択した時だけ下段：
ORIGINAL RP PROJECT / ORIGINAL CHARACTER

TRPGを選択した時：
下段は非表示になり、trpg.jsのキャラ一覧を表示します。

キャラ詳細画面は今まで通り1つの共通レイアウトです。


HOME デザイン（商業イラストレーターHP風）
--------------------------------------

HOMEを作品主役の構成に変更しました。

・上：黒帯「ORIGINAL WORK / 年」
・中央：自動切替メインビジュアル
・下：黒帯にスライドドット / 01 / 03
・巨大作家名：NICOLAS
・ILLUSTRATOR / CHARACTER DESIGN
・短い紹介文
・最下部：NICOLAS / 2026

既存の自動スライド機能や速度はそのままです。

HOMEの文字は index.html 内の SITE.home で編集できます。


OGP / SNSリンクサムネイル
-----------------------

SNSでサイトURLを貼った時のサムネイルを設定済みです。

使用画像：
images/ogp.jpg

推奨サイズ：
1200 × 630 px

画像を変更したい時：
images/ogp.jpg を同じ名前で差し替えるだけでOKです。

現在のOGP URLはテストサイト：

https://nicora0313.github.io/portfolio-test/

に設定しています。

本番公開時は index.html の <head> 内にある

portfolio-test

を

portfolio

へ変更してください。

Xなどで古いサムネイルが残る場合は、
og:image の末尾を

ogp.jpg?v=2

のように変更すると再取得されやすくなります。


OGP 修正版
----------

Xでカードが出ない時のパス問題を避けるため、
OGP画像を images/ogp.jpg ではなく
リポジトリ直下の ogp.jpg に変更しました。

GitHubに必要なもの：

index.html
ogp.jpg

確認用URL：
https://nicora0313.github.io/portfolio-test/?v=ogp7

画像直リンク：
https://nicora0313.github.io/portfolio-test/ogp.jpg?v=7

X用の twitter:site / twitter:creator / twitter:image:alt も追加済みです。


OGP軽量化・Twitterbot対策版
--------------------------

今回、index.html 内に埋め込まれていた巨大な base64 テスト画像を
images/embedded/ 以下へ外部ファイル化しました。

抽出した画像ファイル数：11

これにより、Xのクローラーが取得する index.html 自体を大幅に軽量化しています。

さらに：
・robots.txt で Twitterbot を明示的に許可
・twitter:image:src を追加
・テスト中は canonical / og:url を外しています
  （?card=数字 を別URLとして試しやすくするため）

GitHubへは今回 ZIP の中身をまとめて反映してください。
index.html だけではなく、以下も必要です。

ogp.jpg
robots.txt
images/embedded/ 以下の画像

テスト用URL：
https://nicora0313.github.io/portfolio-test/?card=8

OGP画像直リンク：
https://nicora0313.github.io/portfolio-test/ogp.jpg?v=8


MENU
----

サイドメニューから TRPG 単独項目を削除しました。

現在のメニュー：
HOME
OC
ILLUSTRATION
STANCE

TRPGキャラクターは OCページ内の
OC / TRPG 切替タブから引き続き表示できます。
