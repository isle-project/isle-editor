---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

指定した間隔でテキストのリストを循環させる動的な背景コンポーネントです。

## オプション

* __text__ | `array<string>`: 表示する文字列. Default: `[]`.
* __loop__ | `boolean`: はプロセスを無限に表示するかどうかを示します。. Default: `false`.
* __direction__ | `string`: テキストの流れの方向 (`left`, `right`, `up`, `down`, `tracking`, `focus`, `swirl` のいずれか)。. Default: `'right'`.
* __hold__ | `number`: 滞留時間. Default: `5`.
* __wait__ | `number`: 新しいテキストが到着するまでの時間. Default: `3`.
* __inTime__ | `number`: じかんじかん. Default: `1`.
* __outTime__ | `number`: 終了効果時間. Default: `1`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: テキストのCSSスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'List of Texts', value: 'list' },
        { label: 'Background Image', value: 'backgroundImage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScrollingText
    text= "This is a text re-appearing every five seconds"
    style={{ fontSize: 44, color: 'blue' }}
    wait={5}
    hold={2}
    loop
/>
```

</TabItem>

<TabItem value="list">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

<TabItem value="backgroundImage">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

</Tabs>
