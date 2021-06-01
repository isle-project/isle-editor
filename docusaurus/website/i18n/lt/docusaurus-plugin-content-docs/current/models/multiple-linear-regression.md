---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Daugialypė tiesinė regresija.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __y__ | `string (required)`: rezultato kintamasis. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: vienas ar daugiau predikcinių kintamųjų.. Default: `none`.
* __quantitative__ | `array<string> (required)`: `data` kintamųjų, kurie yra `kvantitatyvūs`, masyvas. Default: `none`.
* __omitMissing__ | `boolean`: kontroliuoja, ar praleisti trūkstamas reikšmes.. Default: `false`.
* __intercept__ | `boolean`: kontroliuoja, ar taikyti modelį su intercepcijos nariu.. Default: `true`.
* __onDiagnostics__ | `function`: atgalinis skambutis, iškviestas su diagnostiniais sklypais. Default: `none`.
* __onPredict__ | `function`: grįžtamasis skambutis, iškviečiamas su prognozėmis ir liekanomis po modelio pritaikymo. Default: `none`.


## Pavyzdžiai

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

