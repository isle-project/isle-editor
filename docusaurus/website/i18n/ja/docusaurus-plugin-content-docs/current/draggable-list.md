---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

学生が再注文できるドラッグ可能な要素のリスト。

## オプション

* __data__ | `array (required)`: id` と `text` キーを持つオブジェクトの配列. Default: `none`.
* __onChange__ | `function`: コールバックは、変更のたびに新しい順序のデータ配列で呼び出されます。. Default: `onChange(){}`.
* __onInit__ | `function`: コンポーネント実装後に呼び出されるコールバック関数. Default: `onInit(){}`.
* __shuffle__ | `boolean`: 初期表示時にデータ要素をシャッフルするかどうかを制御します。. Default: `false`.
* __disabled__ | `boolean`: 要素をドラッグするかどうかを制御します。. Default: `false`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

```jsx live
<DraggableList
    data={[
        { id: 0, text: "Compact" },
        { id: 1, text: "Large" },
        { id: 2, text: "Midsize" },
        { id: 3, text: "Small" }
    ]}
/>
```

