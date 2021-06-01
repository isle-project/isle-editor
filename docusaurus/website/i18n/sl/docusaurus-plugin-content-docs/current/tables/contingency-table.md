---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Preglednica nepredvidljivih dogodkov.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: ime kategorične spremenljivke, ki se prikaže v vrsticah. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  ime kategorične spremenljivke, ki se prikaže v stolpcih. Default: `none`.
* __relativeFreqs__ | `boolean`: nadzoruje, ali se prikažejo relativne frekvence.. Default: `false`.
* __group__ | `(string|Factor)`: ime spremenljivke za razvrščanje v skupine. Default: `none`.
* __display__ | `(array<string>|string)`: ali želite prikazati `Row Percent` in/ali `Column Percent`. Default: `[]`.
* __nDecimalPlaces__ | `number`: število decimalnih mest za relativne frekvence, prikazane v tabeli. Default: `3`.


## Primeri


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
