---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

En kontingenstabell.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: Namn på den kategoriska variabel som ska visas längs raderna.. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  Namnet på den kategoriska variabel som ska visas längs kolumnerna.. Default: `none`.
* __relativeFreqs__ | `boolean`: kontrollerar om relativa frekvenser ska visas. Default: `false`.
* __group__ | `(string|Factor)`: Namnet på grupperingsvariabeln.. Default: `none`.
* __display__ | `(array<string>|string)`: om `Row Percent` och/eller `Column Percent` ska visas.. Default: `[]`.
* __nDecimalPlaces__ | `number`: antal decimaler för de relativa frekvenser som visas i tabellen. Default: `3`.


## Exempel


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
