---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Moninkertainen lineaarinen regressio.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __y__ | `string (required)`: tulosmuuttuja. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: yksi tai useampi ennustemuuttuja. Default: `none`.
* __quantitative__ | `array<string> (required)`: joukko `data`:n muuttujia, jotka ovat `kvantitatiivisia`.. Default: `none`.
* __omitMissing__ | `boolean`: valvoo, jätetäänkö puuttuvat arvot pois. Default: `false`.
* __intercept__ | `boolean`: valvoo, sovitetaanko malli, jossa on leikkaustermi.. Default: `true`.
* __onDiagnostics__ | `function`: callback kutsutaan diagnostisten tonttien kanssa. Default: `none`.
* __onPredict__ | `function`: callback, jota kutsutaan predict-funktion kanssa uusien tietojen ennustamista varten.. Default: `none`.


## Esimerkkejä

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

