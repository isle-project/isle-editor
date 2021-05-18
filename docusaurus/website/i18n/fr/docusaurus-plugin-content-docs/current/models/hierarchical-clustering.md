---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Regroupement hiérarchique.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variables__ | `array<string> (required)`: les noms des variables utilisées pour la mise en grappes. Default: `none`.
* __linkage__ | `string`: soit "complet", soit "simple". Default: `'complete'`.
* __distance__ | `string`: la distance utilisée ("euclidien", "tchebychev", "cosinus", "chamming", ou "manhattan"). Default: `'euclidean'`.
* __onResult__ | `function`: rappel invoqué avec l'objet modèle. Default: `onResult() {}`.


## Exemples

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

