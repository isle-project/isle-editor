---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

度数表です。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `(string|Factor) (required)`: 表示するカテゴリ変数名. Default: `none`.
* __calculateCounts__ | `boolean`: 絶対カウントを表示するかどうかを制御します。. Default: `true`.
* __calculateRelative__ | `boolean`: 相対周波数を表示するかどうかを制御します。. Default: `false`.
* __group__ | `(string|Factor)`: グループ化変数名. Default: `none`.
* __nDecimalPlaces__ | `number`: 表中の相対周波数の小数点以下の桁数. Default: `3`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Relative Frequency', value: 'relativeFrequency' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Number of Decimals', value: 'nDecimals' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
</TabItem>

<TabItem value="relativeFrequency">

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
    calculateRelative
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="nDecimals">

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
    calculateRelative 
    nDecimalPlaces={3}
/>
```

</TabItem>

</Tabs>
