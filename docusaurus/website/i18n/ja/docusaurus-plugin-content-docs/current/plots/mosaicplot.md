---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

モザイクのプロット。

## オプション

* __data__ | `object (required)`: 各変数の値の配列のオブジェクト. Default: `none`.
* __variables__ | `array (required)`: 表示用変数の配列. Default: `none`.
* __showColors__ | `boolean`: 重要性を示す色を表示するかどうかを制御します。. Default: `false`.
* __axisLabels__ | `string`: 軸ラベルの配置 (`軸と平行`、`水平`、`軸に対して垂直`、`垂直`のいずれか). Default: `'parallel to the axis'`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Colored', value: 'colored' },
        { label: 'Axis Labels', value: 'axisLabels' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
    showColors
/>
```

</TabItem>

<TabItem value="axisLabels">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
    showColors
    axisLabels="parallel to the axis"
/>
```

</TabItem>

</Tabs>
