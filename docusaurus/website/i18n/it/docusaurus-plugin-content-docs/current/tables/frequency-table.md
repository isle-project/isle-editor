---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Una tabella delle frequenze.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `(string|Factor) (required)`: nome della variabile categorica da visualizzare. Default: `none`.
* __calculateCounts__ | `boolean`: controlla se visualizzare i conteggi assoluti. Default: `true`.
* __calculateRelative__ | `boolean`: controlla se visualizzare le frequenze relative. Default: `false`.
* __group__ | `(string|Factor)`: nome della variabile di raggruppamento. Default: `none`.
* __nDecimalPlaces__ | `number`: numero di cifre decimali per le frequenze relative visualizzate nella tabella. Default: `3`.


## Esempi

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
