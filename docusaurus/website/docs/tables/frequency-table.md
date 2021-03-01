---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

A frequency table.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `(string|Factor) (required)`: name of categorical variable to be displayed. Default: `none`.
* __calculateCounts__ | `boolean`: controls whether to display absolute counts. Default: `true`.
* __calculateRelative__ | `boolean`: controls whether to display relative frequencies. Default: `false`.
* __group__ | `(string|Factor)`: name of grouping variable. Default: `none`.
* __nDecimalPlaces__ | `number`: number of decimal places for relative frequencies displayed in table. Default: `3`.


## Examples

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
