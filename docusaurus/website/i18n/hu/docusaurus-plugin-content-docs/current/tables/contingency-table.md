---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Egy véletlenszerűségi táblázat.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: a sorok mentén megjelenítendő kategorikus változó neve. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  az oszlopok mentén megjelenítendő kategorikus változó neve. Default: `none`.
* __relativeFreqs__ | `boolean`: a relatív frekvenciák megjelenítését szabályozza. Default: `false`.
* __group__ | `(string|Factor)`: csoportosító változó neve. Default: `none`.
* __display__ | `(array<string>|string)`: hogy a "Sor százalék" és/vagy az "Oszlop százalék" kijelzésre kerüljön-e.. Default: `[]`.
* __nDecimalPlaces__ | `number`: a táblázatban megjelenített relatív gyakoriságok tizedesjegyeinek száma. Default: `3`.


## Példák


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
