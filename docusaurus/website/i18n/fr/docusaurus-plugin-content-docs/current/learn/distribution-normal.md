---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Une composante d'apprentissage pour le calcul des probabilités d'une distribution normale.

## Options

* __domain__ | `object`: objet des tableaux "x" et "y" avec les points de départ et d'arrivée pour l'axe respectif. Default: `none`.
* __hideCDF__ | `boolean`: contrôle si les parcelles du CDF doivent être cachées. Default: `false`.
* __minStDev__ | `number`: l'écart type minimum. Default: `1`.
* __step__ | `(number|string)`: la taille de l'étape de la saisie du défilement. Default: `0.01`.
* __tabs__ | `array<string>`: les onglets à afficher (soit "plus petit", "plus grand", ou "gamme"). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Examples

```jsx live
<LearnNormalDistribution />
```

