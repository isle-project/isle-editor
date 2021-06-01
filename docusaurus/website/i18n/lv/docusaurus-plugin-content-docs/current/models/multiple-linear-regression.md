---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Daudzkārtēja lineārā regresija.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __y__ | `string (required)`: iznākuma mainīgais. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: viens vai vairāki prognozējošie mainīgie lielumi. Default: `none`.
* __quantitative__ | `array<string> (required)`: `data` mainīgo masīvs, kas ir `kvantitatīvie`.. Default: `none`.
* __omitMissing__ | `boolean`: kontrolē, vai izlaist trūkstošās vērtības.. Default: `false`.
* __intercept__ | `boolean`: kontrolē, vai piemērot modeli ar intercepcijas locekli.. Default: `true`.
* __onDiagnostics__ | `function`: izsaukums, kas izsaukts ar diagnostikas zemes gabaliem. Default: `none`.
* __onPredict__ | `function`: pēc modeļa pielāgošanas izsaukts atpakaļsaukums ar prognozēm un atlikumiem.. Default: `none`.


## Piemēri

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

