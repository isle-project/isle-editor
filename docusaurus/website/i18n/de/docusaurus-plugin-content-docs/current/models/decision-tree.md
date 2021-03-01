---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regressions- und Klassifikationsbäume.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __y__ | `(string|Factor) (required)`: Ergebnisvariable. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: eine oder mehrere Prädiktorvariablen. Default: `none`.
* __type__ | `string (required)`: Klassifizierung" für kategorische oder "Regression" für quantitative Ergebnisse. Default: `none`.
* __quantitative__ | `array<string> (required)`: Array von Variablen in `Daten`, die `quantitativ` sind. Default: `none`.
* __impurityMeasure__ | `string`: Verunreinigungsmaß (`Gini` oder `Entropie`). Default: `'gini'`.
* __scoreThreshold__ | `number`: Score-Schwelle für Split. Default: `0.0075`.
* __maxTreeDepth__ | `number`: maximale Baumtiefe. Default: `5`.
* __minItemsCount__ | `number`: minimale Anzahl von Beobachtungen in Blattknoten. Default: `50`.
* __onPredict__ | `function`: Callback, der beim Klicken auf die Schaltfläche "Vorhersage" mit dem Modellobjekt aufgerufen wird. Default: `none`.


## Beispiele

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

