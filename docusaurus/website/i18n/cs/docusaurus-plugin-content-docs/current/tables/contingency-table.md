---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Kontingenční tabulka.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: název kategoriální proměnné, která se má zobrazit podél řádků.. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  název kategoriální proměnné, která se má zobrazit podél sloupců.. Default: `none`.
* __relativeFreqs__ | `boolean`: řídí, zda se mají zobrazovat relativní frekvence. Default: `false`.
* __group__ | `(string|Factor)`: název seskupující proměnné. Default: `none`.
* __display__ | `(array<string>|string)`: zda se má zobrazit `Row Percent` a/nebo `Column Percent`.. Default: `[]`.
* __nDecimalPlaces__ | `number`: počet desetinných míst pro relativní četnosti zobrazené v tabulce.. Default: `3`.


## Příklady


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
