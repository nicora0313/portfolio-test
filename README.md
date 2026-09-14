# YOUR / PORTFOLIO

## 編集・操作ガイド

このREADMEは、現在のポートフォリオをAcodeとGitHub Pagesで管理するための説明書です。

> [!IMPORTANT]
> GitHub Pagesで公開するファイルは、必ずフォルダ構成を保ったままアップロードしてください。

---

## 目次

1. [ファイル構成](#ファイル構成)
2. [まず覚える編集場所](#まず覚える編集場所)
3. [HOMEの編集](#homeの編集)
4. [画像の変更](#画像の変更)
5. [キャラクターの編集](#キャラクターの編集)
6. [ILLUSTRATIONの編集](#illustrationの編集)
7. [STANCEとCONTACT](#stanceとcontact)
8. [動画・YouTubeの追加](#動画youtubeの追加)
9. [GitHub Pagesへの反映](#github-pagesへの反映)
10. [反映されない時](#反映されない時)
11. [スクロール軽量化](#スクロール軽量化)

---

## ファイル構成

```text
portfolio/
├─ index.html                  サイト本体・デザイン・画面切替
├─ README.md                   この説明書
├─ robots.txt                 検索エンジンの巡回設定
├─ ogp.webp                   SNS共有時の画像
│
├─ data/
│  ├─ oc.js                   OCキャラクターデータ
│  ├─ trpg.js                 TRPGキャラクターデータ
│  └─ stance.js               創作スタンスの文章
│
├─ fonts/                     サイトで使用するフォント
│
├─ images/
│  ├─ about.webp              HOMEのABOUT画像
│  ├─ stance.webp             HOMEの創作スタンス画像
│  ├─ contact.webp            HOMEのご依頼案内画像
│  ├─ header/                 HOME上部のスライド画像
│  ├─ selected/               HOMEのSELECTED WORKS
│  ├─ illustration/           ILLUSTRATION一覧の画像
│  ├─ oc/                     OCの立ち絵・アイコン・作品
│  └─ trpg/                   TRPGの立ち絵・アイコン・作品
│
└─ videos/                    オリジナル動画（MP4）
```

> [!CAUTION]
> ファイル名は大文字・小文字まで完全に一致させてください。GitHub Pagesでは `Image.webp` と `image.webp` は別ファイルです。

---

## まず覚える編集場所

| 変更したい内容 | 編集する場所 |
|---|---|
| サイト名・HOMEの文章 | `index.html` の `const SITE` |
| 依頼受付状況 | `index.html` の `commissionOpen` |
| OC | `data/oc.js` |
| TRPG | `data/trpg.js` |
| 創作スタンス | `data/stance.js` |
| CONTACTの案内文章 | `index.html` の `contactPage` |
| ILLUSTRATION一覧 | 公開時は `images/illustration/` のWebPを自動取得。ローカル用は `SITE.works` |
| 色・余白・文字サイズ | `index.html` 前半の `<style>` |

`index.html` 内の次の部分が、普段編集する設定欄です。

```js
const SITE = {
  // サイト全体の設定
};
```

---

## HOMEの編集

### サイト名・キャッチコピー

`index.html` で `const SITE` を検索し、`home` 内を変更します。

```js
siteName: "YOUR / PORTFOLIO",

home: {
  titleTop: "NICO",
  titleBottom: "LAS",
  taglineJa: "描きたいものを、ずっと描き続ける。",
  text: "To draw what I want to draw, forever."
}
```

### ご依頼受付状況

現在は受付停止中です。

```js
commissionOpen: false,
commissionStatusText: "現在ご依頼受付停止中",
```

受付を再開する場合：

```js
commissionOpen: true,
commissionStatusText: "現在ご依頼受付中",
```

この表示は次の2か所へ反映されます。

- HOMEのCONTACTカード
- CONTACTページ上部

### HOME下部の案内

HOME下部は上下2段です。

| 位置 | 表示 | 移動先 | 画像 |
|---|---|---|---|
| 上 | 創作スタンスについて | `#stance` | `images/stance.webp` |
| 下 | ご依頼について | `#contact` | `images/contact.webp` |

---

## 画像の変更

### 同じ名前で差し替える

同名のWebP画像を上書きするだけで変更できます。

```text
images/about.webp
images/stance.webp
images/contact.webp
```

### HOMEヘッダー

```text
images/header/
├─ header01_pc.webp
├─ header01_sp.webp
├─ header02_pc.webp
├─ header02_sp.webp
├─ header03_pc.webp
└─ header03_sp.webp
```

- `_pc`：パソコン用の横長画像
- `_sp`：スマホ用の縦長画像

### SELECTED WORKS

```text
images/selected/
├─ selected01.webp
├─ selected02.webp
├─ selected03.webp
├─ selected04.webp
├─ selected05.webp
└─ selected06.webp
```

画像だけ変える場合は、同じ名前で上書きすれば `index.html` の変更は不要です。

> [!NOTE]
> 拡張子を `.jpg` から `.webp` に書き換えるだけでは画像形式は変換されません。画像アプリなどでWebPとして書き出してください。

---

## キャラクターの編集

### 使用するデータ

| 分類 | データ | 画像フォルダ |
|---|---|---|
| OC | `data/oc.js` | `images/oc/` |
| TRPG | `data/trpg.js` | `images/trpg/` |

### キャラクターの基本形

```js
{
  name: "キャラクター名",
  sub: "英字名や肩書き",
  listSub: "一覧に表示する補足",
  category: "character",
  themeColor: "#2f6bff",
  age: "20",
  height: "180cm",
  role: "ROLE",
  color: "BLUE",
  text: "プロフィール本文",
  icon: "images/oc/character-name/icon.webp"
}
```

OCの分類：

```js
category: "character" // ORIGINAL CHARACTER
category: "rp"        // ORIGINAL RP PROJECT
```

### 衣装と表情差分

```js
outfits: [
  {
    name: "通常衣装",
    image: "images/oc/character-name/default.webp",
    expressions: [
      {
        name: "通常",
        image: "images/oc/character-name/face-normal.webp"
      },
      {
        name: "笑顔",
        image: "images/oc/character-name/face-smile.webp"
      }
    ]
  }
]
```

画像が未設定の場合は、`OUTFIT 01` と書かれた仮の人型が自動表示されます。

### キャラクター別作品

```js
artworks: [
  {
    title: "作品名",
    image: "images/oc/character-name/art01.webp",
    full: "images/oc/character-name/art01-full.webp"
  }
]
```

- `image`：通常表示用
- `full`：タップ拡大時の高解像度画像

---

## ILLUSTRATIONの編集

GitHub Pagesでは `images/illustration/` 以下の `.webp` を自動取得します。画像をGitHubへアップロードし、公開への反映後にページを再読み込みしてください。取得対象はリポジトリの既定ブランチです。Pagesの公開元も同じ内容に揃えてください。

| 保存場所 | 表示先 |
|---|---|
| `images/illustration/` または `images/illustration/oc/rp/` | ORIGINAL RP PROJECT |
| `images/illustration/oc/character/` | ORIGINAL CHARACTER |
| `images/illustration/trpg/` | TRPG |

`01_night-carnival.webp` → `Night Carnival` のように、先頭番号・分類語・日付、末尾の `final`・`ver2` などを除いてタイトルにします。並び順はフォルダ名・ファイル名順（数字順対応）です。画像と拡大画像は同じファイルです。別の `_full.webp` を置くと別作品として取得されるので注意してください。

AcodeやAPI取得失敗時は `SITE.works` を使います。初期設定は `illust1.webp`〜`illust8.webp` の8枚、すべてOCのRP分類です。ローカルにも追加・分類を反映したい場合は `works: Array.from(...)` 全体を `works: [{...}, {...}]` の形式に置き換えて登録します。1作品の例：

```js
{
  title: "作品名",
  year: "2026 / Illustration",
  group: "oc",
  category: "rp",
  image: "images/illustration/work01.webp",
  full: "images/illustration/work01-full.webp"
}
```

### 分類

| group | category | 表示先 |
|---|---|---|
| `oc` | `rp` | ORIGINAL RP PROJECT |
| `oc` | `character` | ORIGINAL CHARACTER |
| `trpg` | 空欄 | TRPG |

---

## STANCEとCONTACT

HOMEの依頼案内は `Commission info` と表示します。受付停止中は「AVAILABLE FOR WORK」が描かれた背景画像を隠し、黒い背景で表示します。受付を再開すると背景画像も戻ります。

NEWSは画像一覧の取得完了後に生成します。API制限や通信失敗時にはローカル用一覧を利用します。更新日時はGitHubの履歴を使い、既存の日時キャッシュは最大6時間残ります。

### STANCE

創作スタンスは `data/stance.js` で管理します。

```js
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
    }
  ]
};
```

### CONTACT

CONTACTは `index.html` の `contactPage` で管理します。

現在の仮項目：

- お受けできるご依頼
- ご相談時に必要な情報
- 料金について
- 納期・制作の流れ
- 修正について
- ご依頼前の注意事項

STANCE・CONTACTともに、見出しを押すと内容が開くプルタブ形式です。

---

## 動画・YouTubeの追加

<details>
<summary><strong>オリジナル動画（MP4）</strong></summary>

```js
videos: [
  {
    title: "動画タイトル",
    sub: "ORIGINAL VIDEO",
    poster: "images/oc/character-name/movie01.webp",
    file: "videos/movie01.mp4"
  }
]
```

サムネイルを押した時に動画が読み込まれます。

</details>

<details>
<summary><strong>YouTube音楽</strong></summary>

```js
music: [
  {
    title: "曲名",
    artist: "アーティスト名",
    embedUrl: "https://www.youtube.com/embed/動画ID"
  }
]
```

通常の視聴URLではなく、`/embed/動画ID` の形式を使用してください。

</details>

---

## GitHub Pagesへの反映

1. Acodeで対象ファイルを編集する
2. 保存する
3. Acodeのプレビューで確認する
4. 変更したファイルをGitHubへアップロードする
5. GitHub PagesのURLを再読み込みする

> [!IMPORTANT]
> トップページとして表示するファイル名は必ず `index.html` にします。

画像を追加した場合、`index.html`だけではなく画像ファイルもGitHubへアップロードしてください。

---

## 反映されない時

<details>
<summary><strong>画像が表示されない</strong></summary>

- 指定したフォルダに画像があるか
- ファイル名と大文字・小文字が一致しているか
- `.webp` と `.jpg` を間違えていないか
- パスが `images/images/...` のように重複していないか

</details>

<details>
<summary><strong>OC・TRPGが表示されない</strong></summary>

- `data/oc.js` と `data/trpg.js` があるか
- 配列名が正しいか
- カンマ・引用符・括弧が抜けていないか

```js
window.OC_CHARACTERS = [/* ... */];
window.TRPG_CHARACTERS = [/* ... */];
```

</details>

<details>
<summary><strong>STANCEが表示されない</strong></summary>

- `data/stance.js` があるか
- `window.STANCE_DATA = { ... };` の形になっているか

</details>

<details>
<summary><strong>GitHub Pagesだけ古い</strong></summary>

1. GitHubへのアップロード完了を確認する
2. 数分待つ
3. ブラウザを再読み込みする
4. キャッシュが残る場合はURL末尾へ一時的に `?v=2` を付ける

</details>

---

## スクロール軽量化

STANCEとCONTACTは長文ページのため、スマホで滑らかにスクロールできる専用の軽量化を適用しています。

- 画面全体の固定ノイズを停止
- ページ全体の移動アニメーションを停止
- タッチ端末では、開いたプルタブの重い影を停止
- 縦方向の指操作を優先

この処理は `index.html` がページごとに自動で切り替えます。設定操作は不要です。
HOME・OC・ILLUSTRATIONなど、ほかのページの演出には影響しません。

---

## 安全に編集するコツ

- 大きな変更の前に `index.html` のコピーを残す
- 一度に大量変更せず、1項目ずつ確認する
- 文字列は半角の引用符で囲む
- 配列の項目間には半角カンマを入れる
- パスの区切りには `/` を使用する
- エラー時は直前に編集したカンマ・引用符・括弧を確認する

---

<p align="center">
  <strong>YOUR / PORTFOLIO</strong><br>
  Illustration / Character Design
</p>
