---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Una tabla de frecuencias.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `(string|Factor) (required)`: nombre de la variable categórica que se va a mostrar. Default: `none`.
* __calculateCounts__ | `boolean`: controla si se muestran los recuentos absolutos. Default: `true`.
* __calculateRelative__ | `boolean`: controla si se muestran las frecuencias relativas. Default: `false`.
* __group__ | `(string|Factor)`: nombre de la variable de agrupación. Default: `none`.
* __nDecimalPlaces__ | `number`: número de decimales para las frecuencias relativas mostradas en la tabla. Default: `3`.


## Ejemplos

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
