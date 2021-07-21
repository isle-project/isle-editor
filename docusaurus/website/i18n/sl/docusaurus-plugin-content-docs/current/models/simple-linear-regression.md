---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Enostavna linearna regresija.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __x__ | `string (required)`: pojasnjevalna spremenljivka. Default: `none`.
* __y__ | `string (required)`: spremenljivka odziva. Default: `none`.
* __group__ | `(string|Factor)`: spremenljivka za razvrščanje v skupine. Default: `none`.
* __omitMissing__ | `boolean`: nadzoruje, ali naj se manjkajoče vrednosti pri prilagajanju modela izpustijo.. Default: `false`.
* __onDiagnostics__ | `function`: povratni klic, sprožen z diagnostičnimi parcelami. Default: `none`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Primeri

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

