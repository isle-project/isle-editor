---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

与えられた用語-文書マトリックスの文書内での単語の共起を可視化したベン図。

## Options

* __height__ | `number`: ピクセル単位でのベン図の高さ. Default: `350`.
* __nTexts__ | `number (required)`: 集計部数. Default: `none`.
* __onClick__ | `function`: Draw Venn Diagram "がクリックされたときに何をするかのコールバック. Default: `onClick() {}`.
* __tdm__ | `array (required)`: 用語文書の行列を表す `array` (https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: 配列のインデックスが単語にマッチするように、`tdm` の配列の順序で `array` を渡します。. Default: `none`.
* __width__ | `number`: ピクセル単位でのベン図の幅. Default: `600`.


## Examples

```jsx live
<LearnWordVennDiagram />
```

