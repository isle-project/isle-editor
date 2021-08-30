---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

要約統計

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variables__ | `array<string> (required)`: 統計値を算出するための変数（複数可. Default: `none`.
* __statistics__ | `array<string> (required)`: 選択した変数について計算する統計値（`Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, のいずれか `Quantile`）。. Default: `none`.
* __secondVariable__ | `string`: 相関統計のための第2の変数. Default: `none`.
* __omit__ | `boolean`: 欠損値を省略するかどうかを制御する. Default: `false`.
* __group__ | `array<(string|Factor)>`: グループ化された変数の名前（複数可. Default: `none`.
* __quantiles__ | `array`: Quantile`統計のために計算されるクォンタイルの配列. Default: `none`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'group' },
        { label: 'Quantiles', value: 'quantiles' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SummaryStatistics 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
    statistics={[ 'Mean', 'Standard Deviation' ]}
/>
```

</TabItem>

<TabItem value="group" >

```jsx live
<SummaryStatistics 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
    statistics={[ 'Mean', 'Standard Deviation' ]}
    group={[ 'Gender' ]}
/>
```
</TabItem>

<TabItem value="quantiles">

```jsx live
<SummaryStatistics 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
    statistics={[ 'Quantile' ]}
    quantiles={[ 0.1, 0.25, 0.5, 0.75, 0.9 ]}
/>
```

</TabItem>

</Tabs>
