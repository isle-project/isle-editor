---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Logistinen regressio.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __y__ | `(string|Factor) (required)`: tulosmuuttuja. Default: `none`.
* __success__ | `any (required)`: menestysluokka `y`. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: yksi tai useampi ennustemuuttuja. Default: `none`.
* __quantitative__ | `array<string> (required)`: joukko `data`:n muuttujia, jotka ovat `kvantitatiivisia`.. Default: `none`.
* __omitMissing__ | `boolean`: valvoo, jätetäänkö puuttuvat arvot pois. Default: `false`.
* __intercept__ | `boolean`: valvoo, sovitetaanko malli, jossa on leikkaustermi.. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Esimerkkejä

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

