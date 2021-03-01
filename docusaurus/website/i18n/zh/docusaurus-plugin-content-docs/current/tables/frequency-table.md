---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

一个频率表；

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `(string|Factor) (required)`: 要显示的分类变量名称. Default: `none`.
* __calculateCounts__ | `boolean`: 控制是否显示绝对数. Default: `true`.
* __calculateRelative__ | `boolean`: 控制是否显示相对频率. Default: `false`.
* __group__ | `(string|Factor)`: 分组名称. Default: `none`.
* __nDecimalPlaces__ | `number`: 表中显示的相对频率的小数点位数. Default: `3`.


## 例子

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
