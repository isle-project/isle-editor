---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Semplice regressione lineare.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __x__ | `string (required)`: variabile esplicativa. Default: `none`.
* __y__ | `string (required)`: variabile di risposta. Default: `none`.
* __group__ | `(string|Factor)`: variabile di raggruppamento. Default: `none`.
* __omitMissing__ | `boolean`: controlla se omettere i valori mancanti nel montaggio del modello. Default: `false`.
* __onDiagnostics__ | `function`: richiamata invocata con trame diagnostiche. Default: `none`.
* __onPredict__ | `function`: richiamata invocata con i valori montati e i residui. Default: `none`.


## Esempi

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

