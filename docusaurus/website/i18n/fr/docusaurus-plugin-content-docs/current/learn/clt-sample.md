---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Un élément d'apprentissage illustrant le Théorème des limites centrales (CLT) lors de l'échantillonnage à partir d'un ensemble de données fournies.

## Options

* __data__ | `object (required)`: les objets de données avec clés correspondent aux noms de variables et aux valeurs contenant les valeurs des variables respectives. Default: `none`.
* __hidePopulationStdev__ | `boolean`: cacher l'affichage de l'écart type de la population. Default: `false`.
* __samples__ | `(array<number>|number)`: une série de chiffres ou un seul chiffre indiquant la taille des échantillons qui peuvent être prélevés. Default: `25`.
* __populationProbabilities__ | `boolean`: s'il faut afficher les équations pour le calcul des probabilités de la population. Default: `false`.
* __quantiles__ | `boolean`: s'il faut montrer l'outil de calcul des quantiles. Default: `false`.
* __variables__ | `array (required)`: les noms des variables qui peuvent être échantillonnées à partir. Default: `none`.


## Exemples

```jsx live
<LearnSampleCLT />
```

