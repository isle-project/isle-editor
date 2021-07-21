---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Regressione lineare multipla.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __y__ | `(string|Factor) (required)`: variabile di risultato. Default: `none`.
* __success__ | `any (required)`: categoria di successo di `y. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una o più variabili predittrici. Default: `none`.
* __quantitative__ | `array<string> (required)`: array di variabili in "dati" che sono "quantitative. Default: `none`.
* __omitMissing__ | `boolean`: controlla se omettere i valori mancanti. Default: `false`.
* __intercept__ | `boolean`: controlla se inserire un modello con un termine di intercettazione. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Esempi

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

