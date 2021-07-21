---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Multipel lineær regression.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __y__ | `string (required)`: udfaldsvariabel. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: en eller flere prædiktorvariable. Default: `none`.
* __quantitative__ | `array<string> (required)`: array af variabler i `data`, der er `kvantitative`.. Default: `none`.
* __omitMissing__ | `boolean`: kontrollerer, om manglende værdier skal udelades. Default: `false`.
* __intercept__ | `boolean`: kontrollerer, om der skal tilpasses en model med et interceptterme. Default: `true`.
* __onDiagnostics__ | `function`: callback påkaldt med diagnostiske plot. Default: `none`.
* __onPredict__ | `function`: callback, der påkaldes med en forudsigelsesfunktion for at foretage forudsigelser for nye data. Default: `none`.


## Eksempler

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

