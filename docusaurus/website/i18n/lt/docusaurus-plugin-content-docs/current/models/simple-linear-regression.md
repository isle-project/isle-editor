---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Paprastoji tiesinė regresija.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __x__ | `string (required)`: aiškinamasis kintamasis. Default: `none`.
* __y__ | `string (required)`: atsako kintamasis. Default: `none`.
* __group__ | `(string|Factor)`: grupavimo kintamasis. Default: `none`.
* __omitMissing__ | `boolean`: kontroliuoja, ar rengiant modelį praleisti trūkstamas reikšmes.. Default: `false`.
* __onDiagnostics__ | `function`: atgalinis skambutis, iškviestas su diagnostiniais sklypais. Default: `none`.
* __onPredict__ | `function`: grįžtamasis skambutis, iškviečiamas su funkcija predict, kad būtų galima prognozuoti naujus duomenis.. Default: `none`.


## Pavyzdžiai

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

