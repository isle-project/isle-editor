---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Une composante d'apprentissage pour le calcul des probabilités d'une distribution gamma.

## Options

* __domain__ | `object`: objet des tableaux "x" et "y" avec les points de départ et d'arrivée pour l'axe respectif. Default: `none`.
* __scaleParameterization__ | `boolean`: contrôle s'il faut utiliser le paramétrage impliquant un paramètre de forme et d'échelle plutôt que de forme et de taux. Default: `false`.
* __step__ | `(number|string)`: la taille de l'étape de la saisie du défilement. Default: `0.01`.
* __symbols__ | `boolean`: l'affichage ou non de symboles grecs pour les paramètres. Default: `true`.
* __tabs__ | `array<string>`: les onglets à afficher (soit "plus petit", "plus grand", ou "gamme"). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Examples

```jsx live
<LearnGammaDistribution />
```

