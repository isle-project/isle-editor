---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Lihtne lineaarne regressioon.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __x__ | `string (required)`: seletav muutuja. Default: `none`.
* __y__ | `string (required)`: vastusemuutuja. Default: `none`.
* __group__ | `(string|Factor)`: rühmitav muutuja. Default: `none`.
* __omitMissing__ | `boolean`: kontrollib, kas puuduvaid väärtusi jäetakse mudeli sobitamisel välja.. Default: `false`.
* __onDiagnostics__ | `function`: callback, mida kutsutakse üles koos diagnostiliste joonistega. Default: `none`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Näited

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

