---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Switchコンポーネントは、複数の要素のリストの中から1つの要素を表示することができます。ユーザーは、現在表示されている要素をクリックすることで、Switchタグの異なる子要素を循環させることができます。

## Options

* __active__ | `boolean`: スイッチがアクティブかどうかを制御します。. Default: `true`.
* __tooltip__ | `string`: スイッチ要素の上にカーソルを置いたときに表示されるツールチップ. Default: `none`.
* __tooltipPos__ | `string`: ツールチップの配置 (`top`, `left`, `right`, `bottom` のいずれか). Default: `'top'`.
* __className__ | `string`: 囲むスパン要素のクラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onChange__ | `function`: コールバックは、要素が切り替わったときに呼び出されます。第一引数に現在表示されている子要素のインデックスを受け取ります。. Default: `onChange() {}`.


## Examples

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```



