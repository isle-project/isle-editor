---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Arbres de régression et de classification.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __y__ | `string (required)`: variable de résultat. Default: `none`.
* __x__ | `(array<string>|string) (required)`: une ou plusieurs variables prédictives. Default: `none`.
* __type__ | `string`: Actuellement, seule la "classification" des réponses catégorielles est prise en charge. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: tableau de variables dans les "données" qui sont "quantitatives. Default: `none`.
* __nTrees__ | `number`: nombre d'arbres. Default: `50`.
* __nTry__ | `number`: nombre de prédicteurs à vérifier à chaque scission. Default: `1`.
* __impurityMeasure__ | `string`: mesure d'impureté ("gini" ou "entropie"). Default: `'gini'`.
* __scoreThreshold__ | `number`: seuil de score pour le partage. Default: `0.01`.
* __maxTreeDepth__ | `number`: profondeur maximale de l'arbre. Default: `20`.
* __minItemsCount__ | `number`: nombre minimum d'observations dans les nœuds des feuilles. Default: `50`.
* __onPredict__ | `function`: rappel invoqué avec l'objet modèle lors du clic sur le bouton de prédiction. Default: `none`.


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

