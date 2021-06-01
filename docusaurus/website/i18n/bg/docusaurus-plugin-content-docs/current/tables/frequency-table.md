---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Таблица на честотата.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variable__ | `(string|Factor) (required)`: име на категоричната променлива, която ще се показва. Default: `none`.
* __calculateCounts__ | `boolean`: контролира дали да се показват абсолютни числа. Default: `true`.
* __calculateRelative__ | `boolean`: контролира дали да се показват относителни честоти. Default: `false`.
* __group__ | `(string|Factor)`: име на променливата за групиране. Default: `none`.
* __nDecimalPlaces__ | `number`: брой десетични знаци за относителните честоти, показани в таблицата. Default: `3`.


## Примери

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
