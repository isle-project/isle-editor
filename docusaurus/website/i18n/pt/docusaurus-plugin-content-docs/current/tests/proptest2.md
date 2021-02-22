---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Teste de proporção de duas amostras.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __var1__ | `string (required)`: nome da primeira variável. Default: `none`.
* __success__ | `string (required)`: categoria de sucesso do `var1`. Default: `none`.
* __var2__ | `string`: nome da segunda variável (`var2` ou `grupo` tem que ser fornecido). Default: `none`.
* __group__ | `string`: nome da variável de agrupamento (`var2` ou `grupo` tem que ser fornecido). Default: `none`.
* __alpha__ | `number`: nível de significância. Default: `0.05`.
* __direction__ | `string`: direção de teste (ou "sem", "maior", ou "de dois lados"). Default: `'two-sided'`.
* __diff__ | `number`: diferença sob H0. Default: `0`.
* __showDecision__ | `boolean`: controla se a hipótese nula deve ser rejeitada no nível de significância especificado. Default: `false`.


## Exemplos

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
