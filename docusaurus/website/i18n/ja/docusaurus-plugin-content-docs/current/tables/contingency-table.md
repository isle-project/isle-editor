---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

偶発的な表。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: 行に沿って表示されるカテゴリ変数名. Default: `none`.
* __colVar__ | `(string|Factor) (required)`: 列に沿って表示されるカテゴリ変数名. Default: `none`.
* __relativeFreqs__ | `boolean`: 相対周波数を表示するかどうかを制御します。. Default: `false`.
* __group__ | `(string|Factor)`: グループ化変数名. Default: `none`.
* __display__ | `(array<string>|string)`: 行のパーセント`および/または列のパーセント`を表示するかどうか. Default: `[]`.
* __nDecimalPlaces__ | `number`: 表中の相対周波数の小数点以下の桁数. Default: `3`.


## 例としては、以下のようなものがあります。


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Relative Frequencies', value: 'relativeFrequency' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Display Row Percentages', value: 'displayRowPercentage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```

</TabItem>

<TabItem value="relativeFrequency">

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
    relativeFreqs 
    nDecimalPlaces={2}
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Drugs"
    colVar="Complications"
    group="Gender"
/>
```

</TabItem>

<TabItem value="displayRowPercentage">

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Drugs"
    colVar="Complications"
    display={['Row Percent']}
/>
```

</TabItem>

</Tabs>
