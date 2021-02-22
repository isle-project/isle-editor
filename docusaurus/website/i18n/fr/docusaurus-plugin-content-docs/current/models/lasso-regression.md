---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

Régression de LASSO.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __y__ | `string (required)`: variable de résultat. Default: `none`.
* __x__ | `(array<string>|string) (required)`: une ou plusieurs variables prédictives. Default: `none`.
* __quantitative__ | `array<string> (required)`: tableau de variables dans les "données" qui sont "quantitatives. Default: `none`.
* __lambda__ | `number`: paramètre de régularisation. Default: `0.001`.
* __intercept__ | `boolean`: contrôle s'il faut faire correspondre un modèle avec un terme d'interception. Default: `true`.


## Exemples

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

