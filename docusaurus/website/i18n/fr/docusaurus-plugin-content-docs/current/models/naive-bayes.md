---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Bayes naïf qui suppose que les prédicteurs, compte tenu de l'appartenance à une classe sociale, suivent une distribution normale.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __y__ | `string (required)`: variable de résultat. Default: `none`.
* __x__ | `(array<string>|string) (required)`: une ou plusieurs variables prédictives. Default: `none`.
* __quantitative__ | `array<string> (required)`: tableau de variables dans les "données" qui sont "quantitatives. Default: `none`.
* __omitMissing__ | `boolean`: contrôle s'il faut omettre les valeurs manquantes. Default: `false`.
* __onPredict__ | `function`: rappel invoqué avec les prédictions et les résidus après ajustement du modèle. Default: `none`.


## Examples

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

