---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Teste de média de uma amostra.

## Options

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `string (required)`: nome da variável. Default: `none`.
* __type__ | `string`: tipo de teste (teste "Z" ou teste "T"). Default: `'T Test'`.
* __stdev__ | `number`: desvio padrão (para "Teste Z"). Default: `none`.
* __alpha__ | `number`: nível de significância. Default: `0.05`.
* __direction__ | `string`: direção de teste (ou "sem", "maior", ou "de dois lados"). Default: `'two-sided'`.
* __mu0__ | `number`: média sob a hipótese nula. Default: `0`.
* __showDecision__ | `boolean`: controla se a hipótese nula deve ser rejeitada no nível de significância especificado. Default: `false`.


## Examples

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
