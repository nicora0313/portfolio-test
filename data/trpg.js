/* =========================================================
   TRPG CHARACTER DATA
   このファイルだけを編集すればTRPGキャラを追加・修正できます。

   OCと同じキャラクター詳細画面
   （衣装 / 表情差分 / MOVIE・MUSIC / イラスト）
   をそのまま利用できます。

   追加例：

   window.TRPG_CHARACTERS = [
     {
       name: "TRPG CHARACTER",
       listSub: "CHARACTER NAME",
       sub: "TRPG / CHARACTER",
       age: "20",
       height: "175 cm",
       role: "PC",
       color: "Blue",
       themeColor: "#2f6bff",
       icon: "images/trpg/icon.webp",

       images: [],
       imageLabels: [],

       outfits: [
         {
           name: "OUTFIT 01",
           image: "images/trpg/default.webp",
           expressions: []
         }
       ],

       artworks: [],
       videos: [],
       music: [],

       text: "ここにプロフィールを書きます。"
     }
   ];

   ========================================================= */

window.TRPG_CHARACTERS = [];
