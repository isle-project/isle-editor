---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Análise de variância.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `string (required)`: nome da variável a ser exibida. Default: `none`.
* __group__ | `(string|Factor)`: nome da variável de agrupamento. Default: `none`.
* __showDecision__ | `boolean`: controla se a decisão de teste deve ser exibida. Default: `false`.


## Exemplos

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
