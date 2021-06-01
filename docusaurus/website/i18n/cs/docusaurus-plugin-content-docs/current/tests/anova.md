---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Analýza rozptylu.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variable__ | `string (required)`: název proměnné, která se má zobrazit. Default: `none`.
* __group__ | `(string|Factor)`: název seskupující proměnné. Default: `none`.
* __showDecision__ | `boolean`: řídí, zda se má zobrazit rozhodnutí o testu. Default: `false`.


## Příklady

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
