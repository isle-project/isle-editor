---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

A contingency table.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: name of categorical variable to be displayed along the rows. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  name of categorical variable to be displayed along the columns. Default: `none`.
* __relativeFreqs__ | `boolean`: controls whether to display relative frequencies. Default: `false`.
* __group__ | `(string|Factor)`: name of grouping variable. Default: `none`.
* __display__ | `(array<string>|string)`: whether to display `Row Percent` and/or `Column Percent`. Default: `[]`.
* __nDecimalPlaces__ | `number`: number of decimal places for relative frequencies displayed in table. Default: `3`.


## Examples


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
