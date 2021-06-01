---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

En hyppighedstabel.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __variable__ | `(string|Factor) (required)`: navnet på den kategoriske variabel, der skal vises. Default: `none`.
* __calculateCounts__ | `boolean`: kontrollerer, om der skal vises absolutte tællinger. Default: `true`.
* __calculateRelative__ | `boolean`: styrer, om der skal vises relative frekvenser. Default: `false`.
* __group__ | `(string|Factor)`: navnet på grupperingsvariablen. Default: `none`.
* __nDecimalPlaces__ | `number`: antal decimaler for de relative frekvenser, der vises i tabellen. Default: `3`.


## Eksempler

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
