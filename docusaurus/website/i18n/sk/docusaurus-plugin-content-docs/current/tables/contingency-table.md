---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Kontingenčná tabuľka.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: názov kategorickej premennej, ktorá sa má zobraziť v riadkoch. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  názov kategorickej premennej, ktorá sa má zobraziť pozdĺž stĺpcov. Default: `none`.
* __relativeFreqs__ | `boolean`: kontroluje, či sa majú zobrazovať relatívne frekvencie.. Default: `false`.
* __group__ | `(string|Factor)`: názov zoskupujúcej premennej. Default: `none`.
* __display__ | `(array<string>|string)`: či sa má zobraziť `Riadkový percentuálny podiel` a/alebo `Stĺpcový percentuálny podiel`. Default: `[]`.
* __nDecimalPlaces__ | `number`: počet desatinných miest pre relatívne frekvencie zobrazené v tabuľke. Default: `3`.


## Príklady


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
