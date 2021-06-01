---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Satunnaisvaihtelutaulukko.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: riveillä näytettävän kategorisen muuttujan nimi. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  sarakkeissa näytettävän kategorisen muuttujan nimi. Default: `none`.
* __relativeFreqs__ | `boolean`: säädetään, näytetäänkö suhteelliset taajuudet. Default: `false`.
* __group__ | `(string|Factor)`: ryhmittelymuuttujan nimi. Default: `none`.
* __display__ | `(array<string>|string)`: näytetäänkö `Row Percent` ja/tai `Column Percent`.. Default: `[]`.
* __nDecimalPlaces__ | `number`: taulukossa esitettyjen suhteellisten frekvenssien desimaalien määrä. Default: `3`.


## Esimerkkejä


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
