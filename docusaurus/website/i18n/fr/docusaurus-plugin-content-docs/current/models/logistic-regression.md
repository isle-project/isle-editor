---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Régression linéaire multiple.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __y__ | `string (required)`: variable de résultat. Default: `none`.
* __success__ | `any (required)`: catégorie de succès de "y".. Default: `none`.
* __x__ | `(array<string>|string) (required)`: une ou plusieurs variables prédictives. Default: `none`.
* __quantitative__ | `array<string> (required)`: tableau de variables dans les "données" qui sont "quantitatives. Default: `none`.
* __omitMissing__ | `boolean`: contrôle s'il faut omettre les valeurs manquantes. Default: `false`.
* __intercept__ | `boolean`: contrôle s'il faut faire correspondre un modèle avec un terme d'interception. Default: `true`.
* __onPredict__ | `function`: rappel invoqué avec les prédictions et les résidus après ajustement du modèle. Default: `none`.


## Exemples

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

