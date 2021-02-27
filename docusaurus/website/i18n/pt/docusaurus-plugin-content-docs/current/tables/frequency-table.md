---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Uma tabela de freqüência.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `string (required)`: nome da variável a ser exibida. Default: `none`.
* __calculateCounts__ | `boolean`: controla se deve exibir contagens absolutas. Default: `true`.
* __calculateRelative__ | `boolean`: controla se deve exibir freqüências relativas. Default: `false`.
* __group__ | `(string|Factor)`: nome da variável de agrupamento. Default: `none`.
* __nDecimalPlaces__ | `number`: número de casas decimais para as freqüências relativas exibidas na tabela. Default: `3`.


## Exemplos

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
