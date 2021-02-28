---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

应急表；

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: 沿行显示的分类变量名称. Default: `none`.
* __colVar__ | `(string|Factor) (required)`: 沿列显示的分类变量名称. Default: `none`.
* __relativeFreqs__ | `boolean`: 控制是否显示相对频率. Default: `false`.
* __group__ | `(string|Factor)`: 分组名称. Default: `none`.
* __display__ | `(array<string>|string)`: 是否显示 "行百分比 "和/或 "列百分比"。. Default: `[]`.
* __nDecimalPlaces__ | `number`: 表中显示的相对频率的小数点位数. Default: `3`.


## 例子


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
