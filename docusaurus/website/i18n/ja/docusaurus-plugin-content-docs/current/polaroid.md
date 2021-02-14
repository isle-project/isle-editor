---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

ポラロイド風の画像を表示するコンポーネント。

## Options

* __image__ | `string`: ポラロイドフレームに表示する画像のURL. Default: `none`.
* __draggable__ | `boolean`: ポラロイドを画面の周りにドラッグするかどうかを制御します。. Default: `false`.
* __showPin__ | `boolean`: ピンを表示するかどうかを制御します。. Default: `false`.
* __stain__ | `boolean`: コーヒーの染みを表示するかどうかを制御します。. Default: `false`.
* __width__ | `number`: ポラロイド幅. Default: `350`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onClick__ | `function`: 画像がクリックされたときに呼び出されるイベントハンドラ（ポラロイドのIDをパラメータとして受け取る. Default: `none`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Pin & Draggable', value: 'pinnedAndDraggable' },
        { label: 'Custom Width', value: 'customWidth' },
        { label: 'Handling Clicks', value: 'handlingClicks' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Polaroid image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="pinnedAndDraggable">

```jsx live
<Polaroid showPin draggable image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="customWidth">

```jsx live
<Polaroid width={200}
 image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="handlingClicks">

```jsx live
<Polaroid image="https://bit.ly/2MGl7K0" 
 onClick={() => {
     alert( 'The polaroid has been clicked...' );
 }} />
```

</TabItem>

</Tabs>
