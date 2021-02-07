---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

指定した間隔でテキストのリストを循環させる動的な背景コンポーネントです。

## Options

* __list__ | `array<string>`: 表示文字列. Default: `[]`.
* __loop__ | `boolean`: はプロセスを無限に表示するかどうかを示します。. Default: `false`.
* __direction__ | `string`: テキストの流れの方向 (`left`, `right`, `up`, `down`, `tracking`, `focus`, `swirl` のいずれか)。. Default: `'right'`.
* __still__ | `number`: 滞留時間. Default: `3`.
* __interval__ | `number`: 呼間. Default: `15`.
* __inTime__ | `number`: じかんじかん. Default: `0.6`.
* __outTime__ | `number`: 終了効果時間. Default: `1`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: テキストのCSSスタイル. Default: `{}`.


## Examples

```jsx live
<ScrollingText
    list={[ 'Heading' ]}
    style={{ fontSize: 44, color: 'red' }}
    interval={5}
    inTime={1.2}
    outTime={1.2}
    still={2}
/>
```



