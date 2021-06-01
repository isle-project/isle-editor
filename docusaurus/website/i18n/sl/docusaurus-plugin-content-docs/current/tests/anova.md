---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Analiza variance.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variable__ | `string (required)`: ime spremenljivke, ki se prikaže. Default: `none`.
* __group__ | `(string|Factor)`: ime spremenljivke za razvrščanje v skupine. Default: `none`.
* __showDecision__ | `boolean`: nadzoruje, ali naj se prikaže odločitev o testu.. Default: `false`.


## Primeri

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
