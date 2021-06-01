---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Variansanalyse.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __variable__ | `string (required)`: navnet på den variabel, der skal vises. Default: `none`.
* __group__ | `(string|Factor)`: navnet på grupperingsvariablen. Default: `none`.
* __showDecision__ | `boolean`: kontrollerer, om testbeslutningen skal vises. Default: `false`.


## Eksempler

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
