---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Un tabel de frecvențe.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variable__ | `(string|Factor) (required)`: numele variabilei categorice care urmează să fie afișată. Default: `none`.
* __calculateCounts__ | `boolean`: controlează dacă se afișează sau nu numărătoarea absolută. Default: `true`.
* __calculateRelative__ | `boolean`: controlează dacă se afișează frecvențele relative. Default: `false`.
* __group__ | `(string|Factor)`: denumirea variabilei de grupare. Default: `none`.
* __nDecimalPlaces__ | `number`: numărul de zecimale pentru frecvențele relative afișate în tabel. Default: `3`.


## Exemple

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
