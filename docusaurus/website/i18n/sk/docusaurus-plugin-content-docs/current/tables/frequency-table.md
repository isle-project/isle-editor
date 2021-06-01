---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Tabuľka frekvencie.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variable__ | `(string|Factor) (required)`: názov kategorickej premennej, ktorá sa má zobraziť. Default: `none`.
* __calculateCounts__ | `boolean`: kontroluje, či sa majú zobrazovať absolútne počty. Default: `true`.
* __calculateRelative__ | `boolean`: kontroluje, či sa majú zobrazovať relatívne frekvencie.. Default: `false`.
* __group__ | `(string|Factor)`: názov zoskupujúcej premennej. Default: `none`.
* __nDecimalPlaces__ | `number`: počet desatinných miest pre relatívne frekvencie zobrazené v tabuľke. Default: `3`.


## Príklady

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
