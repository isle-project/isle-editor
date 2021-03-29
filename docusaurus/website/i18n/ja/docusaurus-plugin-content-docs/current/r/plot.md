---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

ISLEレッスン内でRプロットをレンダリングするためのコンポーネントです。

## オプション

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


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Draggable', value: 'draggable' },
        { label: 'Custom Dimensions', value: 'customDimensions' },
        { label: 'Using Libraries', value: 'usingLibraries' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" />
```

</TabItem>

<TabItem value="draggable" >

```jsx live
<RPlot draggable code="hist( c(20,50,40,70,40,30) )" />
```

</TabItem>

<TabItem value="customDimensions" >

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" width="900px" />
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RPlot 
    libraries={[ 'ggplot2' ]}
    code="qplot(mpg, wt, data = mtcars)" 
/>
```

</TabItem>

</Tabs>
