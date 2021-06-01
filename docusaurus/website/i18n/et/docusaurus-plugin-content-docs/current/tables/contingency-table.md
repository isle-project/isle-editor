---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Kontingentsitabel.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: ridadel kuvatava kategoorilise muutuja nimi. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  veergudel kuvatava kategoorilise muutuja nimi. Default: `none`.
* __relativeFreqs__ | `boolean`: kontrollib, kas kuvada suhtelisi sagedusi. Default: `false`.
* __group__ | `(string|Factor)`: rühmitava muutuja nimi. Default: `none`.
* __display__ | `(array<string>|string)`: kas kuvada "Ridade protsent" ja/või "Veergude protsent".. Default: `[]`.
* __nDecimalPlaces__ | `number`: tabelis näidatud suhteliste sageduste kümnendkohtade arv. Default: `3`.


## Näited


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
