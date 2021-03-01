---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Régression linéaire multiple.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __y__ | `string (required)`: variable de résultat. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: une ou plusieurs variables prédictives. Default: `none`.
* __quantitative__ | `array<string> (required)`: tableau de variables dans les "données" qui sont "quantitatives. Default: `none`.
* __omitMissing__ | `boolean`: contrôle s'il faut omettre les valeurs manquantes. Default: `false`.
* __intercept__ | `boolean`: contrôle s'il faut faire correspondre un modèle avec un terme d'interception. Default: `true`.
* __onDiagnostics__ | `function`: rappel invoqué avec les tracés de diagnostic. Default: `none`.
* __onPredict__ | `function`: rappel invoqué avec les prédictions et les résidus après ajustement du modèle. Default: `none`.


## Exemples

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

