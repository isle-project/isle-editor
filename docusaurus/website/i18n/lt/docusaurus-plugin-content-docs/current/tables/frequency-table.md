---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Dažnumo lentelė.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variable__ | `(string|Factor) (required)`: rodytino kategorinio kintamojo pavadinimas. Default: `none`.
* __calculateCounts__ | `boolean`: kontroliuoja, ar rodyti absoliučius skaičius.. Default: `true`.
* __calculateRelative__ | `boolean`: kontroliuoja, ar rodyti santykinius dažnius.. Default: `false`.
* __group__ | `(string|Factor)`: grupavimo kintamojo pavadinimas. Default: `none`.
* __nDecimalPlaces__ | `number`: lentelėje rodomų santykinių dažnių skaičius po kablelio. Default: `3`.


## Pavyzdžiai

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
