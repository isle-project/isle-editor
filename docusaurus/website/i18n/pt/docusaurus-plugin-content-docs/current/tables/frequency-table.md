---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Uma tabela de freqüência.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `(string|Factor) (required)`: nome da variável categórica a ser exibida. Default: `none`.
* __calculateCounts__ | `boolean`: controla se deve exibir contagens absolutas. Default: `true`.
* __calculateRelative__ | `boolean`: controla se deve exibir freqüências relativas. Default: `false`.
* __group__ | `(string|Factor)`: nome da variável de agrupamento. Default: `none`.
* __nDecimalPlaces__ | `number`: número de casas decimais para as freqüências relativas exibidas na tabela. Default: `3`.


## Exemplos

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
