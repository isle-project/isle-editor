---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

ISLEレッスン内でRプロットをレンダリングするためのコンポーネントです。

## Options

* __code__ | `string`: プロットを生成するRコード. Default: `''`.
* __width__ | `(number|string)`: プロットの幅. Default: `600`.
* __height__ | `(number|string)`: 区画の高さ. Default: `'auto'`.
* __draggable__ | `boolean`: プロットをドラッグ可能にするかどうかを制御します。. Default: `false`.
* __fileType__ | `string`: プロットのファイルタイプ (`png` または `svg`). Default: `'svg'`.
* __libraries__ | `array`: 入力 `code` が実行されたときに自動的にロードされるべき R ライブラリ. Default: `[]`.
* __prependCode__ | `(string|array)`: 評価時に `code` に格納されているコードの前に `string` または `array` の R コードスニペットを追加します。. Default: `''`.
* __meta__ | `object`: プロットメタ情報. Default: `none`.
* __className__ | `string`: クラス名. Default: `''`.
* __onDone__ | `function`: プロットが作成されると `err`, `img`, `body` 引数で呼び出されるコールバック. Default: `onDone() {}`.


## Examples

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" />
```

