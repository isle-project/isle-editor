---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Árboles de regresión y clasificación.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __y__ | `(string|Factor) (required)`: variable de resultado. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una o más variables de predicción. Default: `none`.
* __type__ | `string`: actualmente sólo se apoya la "clasificación" para las respuestas categóricas. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: de variables en los "datos" que son "cuantitativos".. Default: `none`.
* __nTrees__ | `number`: número de árboles. Default: `50`.
* __nTry__ | `number`: número de predictores a comprobar en cada división. Default: `1`.
* __impurityMeasure__ | `string`: medida de impureza (`gini` o `entropía`). Default: `'gini'`.
* __scoreThreshold__ | `number`: umbral de puntuación para la división. Default: `0.01`.
* __maxTreeDepth__ | `number`: máxima profundidad del árbol. Default: `20`.
* __minItemsCount__ | `number`: mínimo de observaciones en los nodos de las hojas. Default: `50`.
* __onPredict__ | `function`: llamada de retorno invocada con el objeto modelo al hacer clic en el botón de predicción. Default: `none`.


## Ejemplos

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

