---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Alberi di regressione e classificazione.

## Options

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __y__ | `string (required)`: variabile di risultato. Default: `none`.
* __x__ | `(array<string>|string) (required)`: una o più variabili predittrici. Default: `none`.
* __type__ | `string`: attualmente è supportata solo la "classificazione" per le risposte categoriche. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: array di variabili in "dati" che sono "quantitative. Default: `none`.
* __nTrees__ | `number`: numero di alberi. Default: `50`.
* __nTry__ | `number`: numero di predittori da controllare ad ogni divisione. Default: `1`.
* __impurityMeasure__ | `string`: misura dell'impurità (`gini` o `entropia`). Default: `'gini'`.
* __scoreThreshold__ | `number`: soglia di punteggio per la suddivisione. Default: `0.01`.
* __maxTreeDepth__ | `number`: profondità massima dell'albero. Default: `20`.
* __minItemsCount__ | `number`: minimo # di osservazioni nei nodi fogliacei. Default: `50`.
* __onPredict__ | `function`: richiamata con l'oggetto modello quando si fa clic sul pulsante predict. Default: `none`.


## Examples

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

