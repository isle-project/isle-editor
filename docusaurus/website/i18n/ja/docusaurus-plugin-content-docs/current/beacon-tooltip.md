---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

レッスン内にビーコンを配置するコンポーネントで、独立して、または `target` に添付して配置します。ビーコンの上にカーソルを置いたりクリックしたりすると、ツールチップが表示されます。

## オプション

* __title__ | `(string|node)`: ツールチップの上部に表示されるタイトル. Default: `none`.
* __content__ | `(string|node)`: ツールチップコンテンツ. Default: `'`content` comes here...'`.
* __event__ | `string`: click`に設定されている場合は、ビーコンをクリックしたときにツールチップがトグルされ、`hover`に設定されている場合は、ホバーしたときにツールチップが有効になります。. Default: `'click'`.
* __placement__ | `string`: ツールチップを `target` (`top`, `top-start`, `top-end`, `bottom`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, `center` のいずれか) に対して相対的に配置します。. Default: `'left'`.
* __target__ | `string`: ツールチップを添付する要素のクラスまたはIDセレクタ. Default: `''`.
* __offset__ | `number`: ツールチップと `target` の距離をピクセル単位で指定します。. Default: `15`.
* __onChange__ | `function`: コールバックはツールチップの状態が変化したときに呼び出されます。2つの引数を受け取ります: `action` (`open` または `close`) と渡された `props` です。. Default: `onChange() {}`.


## 例としては、以下のようなものがあります。

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



