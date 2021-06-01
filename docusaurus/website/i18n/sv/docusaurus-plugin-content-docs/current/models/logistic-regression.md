---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Logistisk regression.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __y__ | `(string|Factor) (required)`: utfallsvariabel.. Default: `none`.
* __success__ | `any (required)`: framgångskategori för `y`.. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: en eller flera prediktionsvariabler. Default: `none`.
* __quantitative__ | `array<string> (required)`: en matris med variabler i "data" som är "kvantitativa".. Default: `none`.
* __omitMissing__ | `boolean`: kontrollerar om saknade värden ska utelämnas. Default: `false`.
* __intercept__ | `boolean`: kontrollerar om en modell ska anpassas med en interceptterm. Default: `true`.
* __onPredict__ | `function`: callback som anropas med förutsägelser och residualer efter modellanpassning.. Default: `none`.


## Exempel

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

