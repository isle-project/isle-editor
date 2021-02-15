---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Teste Kruskal-Wallis.

## Options

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `string (required)`: nome da variável. Default: `none`.
* __group__ | `string`: variável de agrupamento. Default: `none`.
* __showDecision__ | `boolean`: controla se a hipótese nula deve ser rejeitada no nível de significância especificado. Default: `false`.


## Examples

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
