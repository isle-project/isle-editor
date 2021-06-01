---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Păduri aleatorii.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __y__ | `(string|Factor) (required)`: variabilă de rezultat. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una sau mai multe variabile predictive. Default: `none`.
* __type__ | `string`: în prezent, se acceptă doar `Classification` pentru răspunsuri categorice. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: matrice de variabile din `data` care sunt `cuantitative`.. Default: `none`.
* __nTrees__ | `number`: numărul de copaci. Default: `50`.
* __nTry__ | `number`: numărul de predictori care trebuie verificați la fiecare divizare. Default: `1`.
* __impurityMeasure__ | `string`: măsura de impuritate (`gini` sau `entropie`). Default: `'gini'`.
* __scoreThreshold__ | `number`: pragul de punctaj pentru divizare. Default: `0.01`.
* __maxTreeDepth__ | `number`: adâncimea maximă a copacului. Default: `20`.
* __minItemsCount__ | `number`: numărul minim de observații în nodurile foliare. Default: `50`.
* __onPredict__ | `function`: callback invocat cu obiectul model atunci când se face clic pe butonul de predicție. Default: `none`.


## Exemple

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

