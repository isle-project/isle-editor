---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Таблица на непредвидените обстоятелства.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: име на категоричната променлива, която ще се показва по редовете. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  име на категоричната променлива, която ще се показва в колоните. Default: `none`.
* __relativeFreqs__ | `boolean`: контролира дали да се показват относителни честоти. Default: `false`.
* __group__ | `(string|Factor)`: име на променливата за групиране. Default: `none`.
* __display__ | `(array<string>|string)`: дали да се показва `Row Percent` и/или `Column Percent`. Default: `[]`.
* __nDecimalPlaces__ | `number`: брой десетични знаци за относителните честоти, показани в таблицата. Default: `3`.


## Примери


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
