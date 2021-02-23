---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

2つのレンダリングを可能にするISLEコンポーネント。

## オプション

* __button__ | `string`: ボタンラベル. Default: `none`.
* __draggable__ | `boolean`: は、カードをドラッグするかどうかを制御します。. Default: `false`.
* __flipSpeedBackToFront__ | `number`: 秒単位のカードの回転速度. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: 数値} カードが前景から背景に切り替わる速度を秒単位で指定します。. Default: `1`.
* __oneTime__ | `boolean`: は、フリップ処理を一度だけ実行するかどうかを示します。. Default: `false`.
* __perspective__ | `number`: 3D配置された要素にパースペクティブを与えるためのCSSプロパティ値. Default: `1000`.
* __size__ | `number`: undefined. Default: `250`.
* __disabled__ | `boolean`: フリッパブルカードを無効にするかどうかを制御します。. Default: `false`.
* __value__ | `boolean`: カードのフリップ状態. Default: `none`.
* __defaultValue__ | `boolean`: 初期フリップ状態. Default: `false`.
* __containerStyle__ | `object`: コンテナのCSSスタイル. Default: `{}`.
* __frontStyle__ | `object`: フロントカードのCSSスタイル. Default: `{}`.
* __backStyle__ | `object`: バックカードのCSSスタイル. Default: `{}`.
* __onChange__ | `function`: カードが反転されるとコールバックが起動され、現在の反転状態を唯一の引数として受け取ります。. Default: `onChange() {}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Slow Motion', value: 'slowMo' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FlippableCard containerStyle={{ float: 'none' }} size={200}>
  <img src="https://bit.ly/2YU5EbU" />
  <img src="https://bit.ly/3aGv9mp" />
</FlippableCard>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<FlippableCard 
  containerStyle={{ float: 'none' }} 
  frontStyle={{ fontSize: 50, textAlign: 'center' }} 
  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

<TabItem value="slowMo">

```jsx live
<FlippableCard 
  flipSpeedBackToFront={7} 
  flipSpeedFrontToBack={7}   
  containerStyle={{ float: 'none' }} 
  frontStyle={{ fontSize: 50, textAlign: 'center' }} 
  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

</Tabs>
