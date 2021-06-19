---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Teste de correlação.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __var1__ | `string (required)`: nome da primeira variável. Default: `none`.
* __var2__ | `string (required)`: nome da segunda variável. Default: `none`.
* __rho0__ | `number`: valor de correlação sob a hipótese nula. Default: `0`.
* __alpha__ | `number`: nível de significância. Default: `0.05`.
* __direction__ | `string`: direção de teste (ou `less`, `greater`, ou `two-sided`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: controla se a hipótese nula deve ser rejeitada no nível de significância especificado. Default: `false`.


## Exemplos

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
