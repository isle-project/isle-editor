---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Sagedustabel.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variable__ | `(string|Factor) (required)`: kuvatava kategoorilise muutuja nimi. Default: `none`.
* __calculateCounts__ | `boolean`: kontrollib, kas kuvada absoluutseid loendusi. Default: `true`.
* __calculateRelative__ | `boolean`: kontrollib, kas kuvada suhtelisi sagedusi. Default: `false`.
* __group__ | `(string|Factor)`: rühmitava muutuja nimi. Default: `none`.
* __nDecimalPlaces__ | `number`: tabelis esitatud suhteliste sageduste kümnendkohtade arv. Default: `3`.


## Näited

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
