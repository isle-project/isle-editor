---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Teste médio de duas amostras.

## Options

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __x__ | `string (required)`: nome da primeira variável. Default: `none`.
* __y__ | `string`: nome da segunda variável (`y` ou `grupo` tem que ser fornecido). Default: `none`.
* __group__ | `string`: nome da variável de agrupamento (`y` ou `grupo` tem que ser fornecido). Default: `none`.
* __type__ | `string`: tipo de teste (ou "Teste Z" ou "Teste T"). Default: `'T Test'`.
* __xstdev__ | `number`: primeiro desvio padrão (para 'Teste Z'). Default: `none`.
* __ystdev__ | `number`: segundo desvio padrão (para 'Teste Z'). Default: `none`.
* __alpha__ | `number`: nível de significância. Default: `0.05`.
* __direction__ | `string`: direção de teste (ou "sem", "maior", ou "de dois lados"). Default: `'two-sided'`.
* __diff__ | `number`: diferença sob H0. Default: `0`.
* __showDecision__ | `boolean`: controla se a hipótese nula deve ser rejeitada no nível de significância especificado. Default: `false`.


## Examples

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
