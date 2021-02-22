---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

TeX`はLaTeX方程式を表示するために使用できるISLE要素です。このコンポーネントは [KaTeX](https://github.com/Khan/KaTeX) を使用して、高速なレンダリングを実現しています。

## オプション

* __raw__ | `(string|number) (required)`: レンダリングするLaTeXのリテラル `string`。また、`numbers` も受け付けます。. Default: `none`.
* __displayMode__ | `boolean`: 式をインラインで表示するか表示モードで表示するかを示す `boolean`。. Default: `false`.
* __numbered__ | `boolean`: 表示モード方程式の方程式番号を表示するかどうかを制御します。. Default: `false`.
* __style__ | `object`: 方程式コンテナに適用されるCSSのキーと値のペアを持つ `object`。. Default: `{}`.
* __tag__ | `string`: 右側に表示される数式に表示されるカスタム文字。デフォルトは、レッスン内の方程式の番号になります。. Default: `none`.
* __elems__ | `object`: オブジェクト `keys` は LaTeX 文字を表し、その値は設定用の `オブジェクト` であり、対話的なものにするためのものです。オプション `tooltip` を設定すると、LaTeX 文字の上にカーソルを置いたときにツールチップを表示します。この場合、追加のプロパティ `legend`, `min`, `max`, `step` がサポートされています。. Default: `{}`.
* __popoverPlacement__ | `string`: 指定された `elems` (`top`, `right`, `bottom`, `left` のいずれか) のポップオーバー位置。. Default: `'top'`.
* __onPopover__ | `function`: コールバック `function` は、コントロールのポップオーバーがトグルされたときに、その唯一の引数として表示状態をブール値として受け取ります。. Default: `onPopover() {}`.
* __onClick__ | `function`: コールバック `function` は、ユーザが数式をクリックするたびに呼び出されます。. Default: `none`.


## 例としては、以下のようなものがあります。

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



