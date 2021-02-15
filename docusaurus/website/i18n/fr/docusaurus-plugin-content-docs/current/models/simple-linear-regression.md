---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Régression linéaire simple.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __x__ | `string (required)`: variable explicative. Default: `none`.
* __y__ | `string (required)`: variable réponse. Default: `none`.
* __group__ | `string`: variable de regroupement. Default: `none`.
* __omitMissing__ | `boolean`: contrôle s'il faut omettre les valeurs manquantes dans l'ajustement du modèle. Default: `false`.
* __onDiagnostics__ | `function`: rappel invoqué avec les tracés de diagnostic. Default: `none`.
* __onPredict__ | `function`: rappel invoqué avec valeurs ajustées et résidus. Default: `none`.


## Examples

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

