---
id: image
title: Image
sidebar_label: Image
---

画像を表示するためのコンポーネント。

## オプション

* __src__ | `string (required)`: イメージソース位置. Default: `none`.
* __alt__ | `string`: 画像記述. Default: `''`.
* __body__ | `string`: ベース６４符号化された画像データ. Default: `none`.
* __height__ | `(number|string)`: 画像の高さ. Default: `none`.
* __width__ | `(number|string)`: 画像幅. Default: `none`.
* __inline__ | `boolean`: は画像をテキストで囲むことを可能にします。. Default: `false`.
* __id__ | `string`: 構成要素識別子. Default: `none`.
* __showModal__ | `boolean`: フルスクリーンモーダルビューを表示するかどうかを制御します。. Default: `true`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onShare__ | `function`: 共有」ボタンがクリックされた場合に、画像とともにコールバックが呼び出されます。. Default: `none`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Border', value: 'withStyle' },
        { label: 'Controlled Size', value: 'controlledSize' },
        { label: 'Inline', value: 'inline' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Image 
    alt="Self-portrait by Vincent van Gogh from September 1889." 
    src="https://bit.ly/37cof7K"
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<Image 
    alt="Self-portrait by Vincent van Gogh from September 1889." 
    src="https://bit.ly/37cof7K"
    style={{ border: 'solid 10px black'}}
/>
```
</TabItem>

<TabItem value="controlledSize">

```jsx live
<Image 
    alt="The Starry Night by Vincent van Gogh" 
    src="https://bit.ly/37h3JTj"
    width="200px"
    height="auto"
/>
```
</TabItem>


<TabItem value="inline">

```jsx live
<div>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
<Image 
    src="https://isle.heinz.cmu.edu/Summertime_flowerGradient.png"
    width="300px"
    height="auto"
    inline
/>
no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</div>
```
</TabItem>

</Tabs>
