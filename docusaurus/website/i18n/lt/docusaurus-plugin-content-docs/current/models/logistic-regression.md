---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Logistinė regresija.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __y__ | `(string|Factor) (required)`: rezultato kintamasis. Default: `none`.
* __success__ | `any (required)`: `y` sėkmės kategorija. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: vienas ar daugiau predikcinių kintamųjų.. Default: `none`.
* __quantitative__ | `array<string> (required)`: `data` kintamųjų, kurie yra `kvantitatyvūs`, masyvas. Default: `none`.
* __omitMissing__ | `boolean`: kontroliuoja, ar praleisti trūkstamas reikšmes.. Default: `false`.
* __intercept__ | `boolean`: kontroliuoja, ar taikyti modelį su intercepcijos nariu.. Default: `true`.
* __onPredict__ | `function`: grįžtamasis skambutis, iškviečiamas su prognozėmis ir liekanomis po modelio pritaikymo. Default: `none`.


## Pavyzdžiai

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

