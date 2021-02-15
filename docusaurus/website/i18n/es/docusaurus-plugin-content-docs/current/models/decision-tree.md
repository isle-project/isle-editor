---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Árboles de regresión y clasificación.

## Options

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __y__ | `string (required)`: variable de resultado. Default: `none`.
* __x__ | `(array<string>|string) (required)`: una o más variables de predicción. Default: `none`.
* __type__ | `string (required)`: "Clasificación" para los categóricos o "Regresión" para los cuantitativos.. Default: `none`.
* __quantitative__ | `array<string> (required)`: de variables en los "datos" que son "cuantitativos".. Default: `none`.
* __impurityMeasure__ | `string`: medida de impureza (`gini` o `entropía`). Default: `'gini'`.
* __scoreThreshold__ | `number`: umbral de puntuación para la división. Default: `0.0075`.
* __maxTreeDepth__ | `number`: máxima profundidad del árbol. Default: `5`.
* __minItemsCount__ | `number`: mínimo de observaciones en los nodos de las hojas. Default: `50`.
* __onPredict__ | `function`: llamada de retorno invocada con el objeto modelo al hacer clic en el botón de predicción. Default: `none`.


## Examples

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

