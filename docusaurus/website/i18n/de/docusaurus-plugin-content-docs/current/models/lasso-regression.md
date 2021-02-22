---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO-Regression.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __y__ | `string (required)`: Ergebnisvariable. Default: `none`.
* __x__ | `(array<string>|string) (required)`: eine oder mehrere Prädiktorvariablen. Default: `none`.
* __quantitative__ | `array<string> (required)`: Array von Variablen in `Daten`, die `quantitativ` sind. Default: `none`.
* __lambda__ | `number`: Regelungsparameter. Default: `0.001`.
* __intercept__ | `boolean`: steuert, ob ein Modell mit einem Intercept-Term angepasst werden soll. Default: `true`.


## Beispiele

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

