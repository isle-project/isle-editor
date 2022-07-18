---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K- signifie regroupement.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variables__ | `array<string> (required)`: les noms des variables utilisées pour la mise en grappes. Default: `none`.
* __K__ | `number`: nombre de grappes. Default: `3`.
* __elbowPlot__ | `boolean`: booléen indiquant s'il faut inclure le tracé du coude. Default: `false`.
* __initialization__ | `string`: méthode d'initialisation (`kmeans++`, `random`, ou `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: rappel invoqué avec l'objet modèle. Default: `onResult() {}`.


## Exemples

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

