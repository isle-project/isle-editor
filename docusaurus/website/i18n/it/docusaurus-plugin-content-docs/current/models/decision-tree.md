---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Alberi di regressione e classificazione.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __y__ | `string (required)`: variabile di risultato. Default: `none`.
* __x__ | `(array<string>|string) (required)`: una o più variabili predittrici. Default: `none`.
* __type__ | `string (required)`: "Classificazione" per i risultati categorici o "regressione" per i risultati quantitativi. Default: `none`.
* __quantitative__ | `array<string> (required)`: array di variabili in "dati" che sono "quantitative. Default: `none`.
* __impurityMeasure__ | `string`: misura dell'impurità (`gini` o `entropia`). Default: `'gini'`.
* __scoreThreshold__ | `number`: soglia di punteggio per la suddivisione. Default: `0.0075`.
* __maxTreeDepth__ | `number`: profondità massima dell'albero. Default: `5`.
* __minItemsCount__ | `number`: minimo # di osservazioni nei nodi fogliacei. Default: `50`.
* __onPredict__ | `function`: richiamata con l'oggetto modello quando si fa clic sul pulsante predict. Default: `none`.


## Esempi

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

