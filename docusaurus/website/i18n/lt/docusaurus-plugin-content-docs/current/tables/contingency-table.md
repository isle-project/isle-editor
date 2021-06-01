---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Nenumatytų atvejų lentelė.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: kategorinio kintamojo, kuris bus rodomas eilutėse, pavadinimas. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  kategorinio kintamojo, kuris bus rodomas išilgai stulpelių, pavadinimas. Default: `none`.
* __relativeFreqs__ | `boolean`: kontroliuoja, ar rodyti santykinius dažnius.. Default: `false`.
* __group__ | `(string|Factor)`: grupavimo kintamojo pavadinimas. Default: `none`.
* __display__ | `(array<string>|string)`: ar rodyti `Row Percent` ir (arba) `Column Percent`. Default: `[]`.
* __nDecimalPlaces__ | `number`: lentelėje rodomų santykinių dažnių skaičius po kablelio. Default: `3`.


## Pavyzdžiai


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
