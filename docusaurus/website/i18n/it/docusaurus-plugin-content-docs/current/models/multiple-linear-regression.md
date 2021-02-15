---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Regressione lineare multipla.

## Options

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __y__ | `string (required)`: variabile di risultato. Default: `none`.
* __x__ | `(array<string>|string) (required)`: una o più variabili predittrici. Default: `none`.
* __quantitative__ | `array<string> (required)`: array di variabili in "dati" che sono "quantitative. Default: `none`.
* __omitMissing__ | `boolean`: controlla se omettere i valori mancanti. Default: `false`.
* __intercept__ | `boolean`: controlla se inserire un modello con un termine di intercettazione. Default: `true`.
* __onDiagnostics__ | `function`: richiamata invocata con trame diagnostiche. Default: `none`.
* __onPredict__ | `function`: richiamo invocato con previsioni e residui dopo il montaggio del modello. Default: `none`.


## Examples

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

