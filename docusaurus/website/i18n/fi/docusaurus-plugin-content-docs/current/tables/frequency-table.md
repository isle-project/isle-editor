---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Taajuustaulukko.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variable__ | `(string|Factor) (required)`: näytettävän kategorisen muuttujan nimi. Default: `none`.
* __calculateCounts__ | `boolean`: valvoo, näytetäänkö absoluuttiset lukumäärät. Default: `true`.
* __calculateRelative__ | `boolean`: säädetään, näytetäänkö suhteelliset taajuudet. Default: `false`.
* __group__ | `(string|Factor)`: ryhmittelymuuttujan nimi. Default: `none`.
* __nDecimalPlaces__ | `number`: taulukossa esitettyjen suhteellisten frekvenssien desimaalien määrä. Default: `3`.


## Esimerkkejä

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Relative Frequency', value: 'relativeFrequency' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Number of Decimals', value: 'nDecimals' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
</TabItem>

<TabItem value="relativeFrequency">

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
    calculateRelative
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="nDecimals">

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
    calculateRelative 
    nDecimalPlaces={3}
/>
```

</TabItem>

</Tabs>
