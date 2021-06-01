---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Biežuma tabula.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variable__ | `(string|Factor) (required)`: rādāmā kategoriskā mainīgā nosaukums. Default: `none`.
* __calculateCounts__ | `boolean`: kontrolē, vai tiek rādīti absolūtie skaitļi.. Default: `true`.
* __calculateRelative__ | `boolean`: nosaka, vai attēlot relatīvās frekvences.. Default: `false`.
* __group__ | `(string|Factor)`: grupēšanas mainīgā nosaukums. Default: `none`.
* __nDecimalPlaces__ | `number`: decimālzīmju skaits tabulā attēlotajām relatīvajām frekvencēm.. Default: `3`.


## Piemēri

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
