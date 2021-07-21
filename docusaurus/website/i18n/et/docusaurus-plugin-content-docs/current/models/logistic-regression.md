---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Logistiline regressioon.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __y__ | `(string|Factor) (required)`: tulemusmuutuja. Default: `none`.
* __success__ | `any (required)`: edu kategooria `y`. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: üks või mitu ennustavat muutujat. Default: `none`.
* __quantitative__ | `array<string> (required)`: muutujate massiivi "andmed", mis on "kvantitatiivsed".. Default: `none`.
* __omitMissing__ | `boolean`: kontrollib, kas puuduvad väärtused jäetakse välja. Default: `false`.
* __intercept__ | `boolean`: kontrollib, kas mudelile sobitada intertseptiterminiga.. Default: `true`.
* __onPredict__ | `function`: callback, mida kutsutakse esile koos predict funktsiooniga, et teha ennustused uute andmete kohta. Default: `none`.


## Näited

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

