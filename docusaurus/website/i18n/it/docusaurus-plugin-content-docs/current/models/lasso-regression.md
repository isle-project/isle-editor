---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

Regressione LASSO.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __y__ | `string (required)`: variabile di risultato. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una o più variabili predittrici. Default: `none`.
* __quantitative__ | `array<string> (required)`: array di variabili in "dati" che sono "quantitative. Default: `none`.
* __lambda__ | `number`: parametro di regolarizzazione. Default: `0.001`.
* __intercept__ | `boolean`: controlla se inserire un modello con un termine di intercettazione. Default: `true`.
* __onPredict__ | `function`: callback invocato con una funzione predict per fare previsioni per i nuovi dati. Default: `onPredict() {}`.


## Esempi

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

