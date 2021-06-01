---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Tabulka četností.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variable__ | `(string|Factor) (required)`: název kategoriální proměnné, která se má zobrazit. Default: `none`.
* __calculateCounts__ | `boolean`: řídí, zda se mají zobrazovat absolutní počty. Default: `true`.
* __calculateRelative__ | `boolean`: řídí, zda se mají zobrazovat relativní frekvence. Default: `false`.
* __group__ | `(string|Factor)`: název seskupující proměnné. Default: `none`.
* __nDecimalPlaces__ | `number`: počet desetinných míst pro relativní četnosti zobrazené v tabulce.. Default: `3`.


## Příklady

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
