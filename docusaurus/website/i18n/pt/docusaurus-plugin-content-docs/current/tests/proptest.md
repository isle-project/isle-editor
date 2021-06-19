---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Teste de proporção de uma amostra.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `(string|Factor) (required)`: nome da variável. Default: `none`.
* __success__ | `any (required)`: categoria de sucesso da "variável". Default: `none`.
* __alpha__ | `number`: nível de significância. Default: `0.05`.
* __direction__ | `string`: direção de teste (ou `less`, `greater`, ou `two-sided`). Default: `'two-sided'`.
* __p0__ | `number`: proporção sob a hipótese nula. Default: `0.5`.
* __showDecision__ | `boolean`: controla se a hipótese nula deve ser rejeitada no nível de significância especificado. Default: `false`.


## Exemplos

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
