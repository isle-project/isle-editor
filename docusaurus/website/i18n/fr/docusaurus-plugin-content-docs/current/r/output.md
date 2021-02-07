---
id: r-output
title: R Output
sidebar_label: R Output
---

Composant pour le rendu de la sortie R dans une leçon ISLE.

## Options

* __code__ | `string`: Code R utilisé pour évaluer. Default: `''`.
* __libraries__ | `array`: R les bibliothèques qui doivent être chargées automatiquement lorsque le "code" d'entrée est exécuté. Default: `[]`.
* __prependCode__ | `(string|array)`: Le code R (ou "tableau" de blocs de code) doit être ajouté au code stocké dans le "code" lors de l'évaluation. Default: `''`.
* __onPlots__ | `function`: rappel invoqué avec tout tracé généré. Default: `onPlots() {}`.
* __onResult__ | `function`: rappel invoqué avec "erreur" ("nul" si l'opération a réussi) et "résultat" avec la sortie R. Default: `onResult() {}`.


## Examples

```jsx live
<ROutput code="runif(10)" />
```

