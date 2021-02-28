---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Tabela częstotliwości.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `(string|Factor) (required)`: nazwa zmiennej kategorycznej, która ma zostać wyświetlona. Default: `none`.
* __calculateCounts__ | `boolean`: kontroluje, czy wyświetlane są liczby bezwzględne. Default: `true`.
* __calculateRelative__ | `boolean`: kontroluje, czy wyświetlane są częstotliwości względne. Default: `false`.
* __group__ | `(string|Factor)`: nazwa zmiennej grupującej. Default: `none`.
* __nDecimalPlaces__ | `number`: liczba miejsc po przecinku dla częstotliwości względnych wyświetlanych w tabeli. Default: `3`.


## Przykłady

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
