---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Variansanalys.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variable__ | `string (required)`: namnet på den variabel som ska visas. Default: `none`.
* __group__ | `(string|Factor)`: Namnet på grupperingsvariabeln.. Default: `none`.
* __showDecision__ | `boolean`: kontrollerar om testbeslutet ska visas. Default: `false`.


## Exempel

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
