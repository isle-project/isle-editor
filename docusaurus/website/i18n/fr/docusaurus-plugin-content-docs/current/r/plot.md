---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Composant pour le rendu d'un tracé R dans une leçon d'ISLE.

## Options

* __code__ | `string`: Code R pour générer l'intrigue. Default: `''`.
* __width__ | `(number|string)`: largeur de la parcelle (en px). Default: `600`.
* __height__ | `(number|string)`: hauteur de la parcelle (en px). Default: `'auto'`.
* __draggable__ | `boolean`: contrôle si la parcelle doit pouvoir être traînée. Default: `false`.
* __fileType__ | `string`: le type de fichier de la parcelle (`png` ou `svg`). Default: `'svg'`.
* __libraries__ | `array`: R les bibliothèques qui doivent être chargées automatiquement lorsque le "code" d'entrée est exécuté. Default: `[]`.
* __prependCode__ | `(string|array)`: une "chaîne" ou un "tableau" d'extraits de code R à ajouter au code stocké dans "code" lors de l'évaluation. Default: `''`.
* __meta__ | `object`: méta-information sur les parcelles. Default: `none`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __onDone__ | `function`: rappel invoqué avec les arguments "er", "img" et "body" une fois qu'un complot est créé. Default: `onDone() {}`.


## Exemples

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" />
```

