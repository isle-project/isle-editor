---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Multiple lineare Regression.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __y__ | `string (required)`: Ergebnisvariable. Default: `none`.
* __x__ | `(array<string>|string) (required)`: eine oder mehrere Prädiktorvariablen. Default: `none`.
* __quantitative__ | `array<string> (required)`: Array von Variablen in `Daten`, die `quantitativ` sind. Default: `none`.
* __omitMissing__ | `boolean`: steuert, ob fehlende Werte ausgelassen werden sollen. Default: `false`.
* __intercept__ | `boolean`: steuert, ob ein Modell mit einem Intercept-Term angepasst werden soll. Default: `true`.
* __onDiagnostics__ | `function`: Callback, der mit Diagnoseplots aufgerufen wird. Default: `none`.
* __onPredict__ | `function`: Callback, der mit Vorhersagen und Residuen nach der Modellanpassung aufgerufen wird. Default: `none`.


## Beispiele

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

