---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Mitmekordne lineaarne regressioon.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __y__ | `string (required)`: tulemusmuutuja. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: üks või mitu ennustavat muutujat. Default: `none`.
* __quantitative__ | `array<string> (required)`: muutujate massiivi "andmed", mis on "kvantitatiivsed".. Default: `none`.
* __omitMissing__ | `boolean`: kontrollib, kas puuduvad väärtused jäetakse välja. Default: `false`.
* __intercept__ | `boolean`: kontrollib, kas mudelile sobitada intertseptiterminiga.. Default: `true`.
* __onDiagnostics__ | `function`: callback, mida kutsutakse üles koos diagnostiliste joonistega. Default: `none`.
* __onPredict__ | `function`: callback, mida kutsutakse üles koos prognooside ja jääkidega pärast mudeli sobitamist. Default: `none`.


## Näited

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

