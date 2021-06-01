---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

En frekvenstabell.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variable__ | `(string|Factor) (required)`: namnet på den kategoriska variabel som ska visas. Default: `none`.
* __calculateCounts__ | `boolean`: kontrollerar om absoluta antal ska visas. Default: `true`.
* __calculateRelative__ | `boolean`: kontrollerar om relativa frekvenser ska visas. Default: `false`.
* __group__ | `(string|Factor)`: Namnet på grupperingsvariabeln.. Default: `none`.
* __nDecimalPlaces__ | `number`: antal decimaler för de relativa frekvenser som visas i tabellen. Default: `3`.


## Exempel

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
