---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Arbori de regresie și de clasificare.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __y__ | `(string|Factor) (required)`: variabilă de rezultat. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una sau mai multe variabile predictive. Default: `none`.
* __type__ | `string (required)`: `Clasificare` pentru rezultate categorice sau `Regresie` pentru rezultate cantitative. Default: `none`.
* __quantitative__ | `array<string> (required)`: matrice de variabile din `data` care sunt `cuantitative`.. Default: `none`.
* __impurityMeasure__ | `string`: măsura de impuritate (`gini` sau `entropie`). Default: `'gini'`.
* __scoreThreshold__ | `number`: pragul de punctaj pentru divizare. Default: `0.0075`.
* __maxTreeDepth__ | `number`: adâncimea maximă a copacului. Default: `5`.
* __minItemsCount__ | `number`: numărul minim de observații în nodurile foliare. Default: `50`.
* __onPredict__ | `function`: callback invocat cu obiectul model atunci când se face clic pe butonul de predicție. Default: `none`.


## Exemple

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

