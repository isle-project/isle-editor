---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Tablica awaryjna.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: nazwa zmiennej kategorycznej, która ma być wyświetlana w wierszach. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  nazwa zmiennej kategorycznej, która ma być wyświetlana wzdłuż kolumn. Default: `none`.
* __relativeFreqs__ | `boolean`: kontroluje, czy wyświetlane są częstotliwości względne. Default: `false`.
* __group__ | `(string|Factor)`: nazwa zmiennej grupującej. Default: `none`.
* __display__ | `(array<string>|string)`: czy wyświetlać `Row Percent` i/lub `Column Percent`. Default: `[]`.
* __nDecimalPlaces__ | `number`: liczba miejsc po przecinku dla częstotliwości względnych wyświetlanych w tabeli. Default: `3`.


## Przykłady


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
