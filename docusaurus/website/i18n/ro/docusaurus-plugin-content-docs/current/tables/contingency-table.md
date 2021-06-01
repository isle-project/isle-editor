---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Un tabel de contingență.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: numele variabilei categorice care urmează să fie afișată de-a lungul rândurilor. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  numele variabilei categorice care urmează să fie afișată de-a lungul coloanelor. Default: `none`.
* __relativeFreqs__ | `boolean`: controlează dacă se afișează frecvențele relative. Default: `false`.
* __group__ | `(string|Factor)`: denumirea variabilei de grupare. Default: `none`.
* __display__ | `(array<string>|string)`: dacă se afișează `Row Percent` și/sau `Column Percent`.. Default: `[]`.
* __nDecimalPlaces__ | `number`: numărul de zecimale pentru frecvențele relative afișate în tabel. Default: `3`.


## Exemple


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
