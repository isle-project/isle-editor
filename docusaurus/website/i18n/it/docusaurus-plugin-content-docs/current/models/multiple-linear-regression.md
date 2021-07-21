---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Regressione lineare multipla.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __y__ | `string (required)`: variabile di risultato. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una o più variabili predittrici. Default: `none`.
* __quantitative__ | `array<string> (required)`: array di variabili in "dati" che sono "quantitative. Default: `none`.
* __omitMissing__ | `boolean`: controlla se omettere i valori mancanti. Default: `false`.
* __intercept__ | `boolean`: controlla se inserire un modello con un termine di intercettazione. Default: `true`.
* __onDiagnostics__ | `function`: richiamata invocata con trame diagnostiche. Default: `none`.
* __onPredict__ | `function`: callback invocato con una funzione predict per fare previsioni per i nuovi dati. Default: `none`.


## Esempi

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

