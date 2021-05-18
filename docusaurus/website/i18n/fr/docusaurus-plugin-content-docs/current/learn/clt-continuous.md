---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Une composante d'apprentissage illustrant le Théorème des limites centrales (CLT) pour une distribution continue choisie.

## Options

* __distributions__ | `array<string>`: des distributions statistiques à choisir parmi ("uniforme", "exponentielle" et/ou "normale"). Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: tableau de nombres ou un seul nombre indiquant les tailles d'échantillon qui peuvent être tirées. Default: `25`.
* __hideFormulas__ | `boolean`: contrôle si les formules doivent être cachées dans le texte du composant. Default: `false`.


## Exemples

```jsx live
<LearnContinuousCLT />
```

