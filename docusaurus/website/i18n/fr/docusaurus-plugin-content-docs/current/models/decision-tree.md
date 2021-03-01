---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Arbres de régression et de classification.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __y__ | `(string|Factor) (required)`: variable de résultat. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: une ou plusieurs variables prédictives. Default: `none`.
* __type__ | `string (required)`: Classification pour les résultats catégoriques ou Régression pour les résultats quantitatifs. Default: `none`.
* __quantitative__ | `array<string> (required)`: tableau de variables dans les "données" qui sont "quantitatives. Default: `none`.
* __impurityMeasure__ | `string`: mesure d'impureté ("gini" ou "entropie"). Default: `'gini'`.
* __scoreThreshold__ | `number`: seuil de score pour le partage. Default: `0.0075`.
* __maxTreeDepth__ | `number`: profondeur maximale de l'arbre. Default: `5`.
* __minItemsCount__ | `number`: nombre minimum d'observations dans les nœuds des feuilles. Default: `50`.
* __onPredict__ | `function`: rappel invoqué avec l'objet modèle lors du clic sur le bouton de prédiction. Default: `none`.


## Exemples

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

