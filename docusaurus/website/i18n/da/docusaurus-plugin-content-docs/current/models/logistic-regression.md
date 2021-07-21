---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Logistisk regression.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __y__ | `(string|Factor) (required)`: udfaldsvariabel. Default: `none`.
* __success__ | `any (required)`: succeskategori af `y`. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: en eller flere prædiktorvariable. Default: `none`.
* __quantitative__ | `array<string> (required)`: array af variabler i `data`, der er `kvantitative`.. Default: `none`.
* __omitMissing__ | `boolean`: kontrollerer, om manglende værdier skal udelades. Default: `false`.
* __intercept__ | `boolean`: styrer, om der skal tilpasses en model med et interceptterme. Default: `true`.
* __onPredict__ | `function`: callback, der påkaldes med en forudsigelsesfunktion for at foretage forudsigelser for nye data. Default: `none`.


## Eksempler

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

