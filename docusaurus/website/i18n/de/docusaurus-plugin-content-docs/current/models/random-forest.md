---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Regressions- und Klassifikationsbäume.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __y__ | `(string|Factor) (required)`: Ergebnisvariable. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: eine oder mehrere Prädiktorvariablen. Default: `none`.
* __type__ | `string`: derzeit wird nur `Classification` für kategorische Antworten unterstützt. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: Array von Variablen in `Daten`, die `quantitativ` sind. Default: `none`.
* __nTrees__ | `number`: Anzahl der Bäume. Default: `50`.
* __nTry__ | `number`: Anzahl der Prädiktoren, die bei jedem Split überprüft werden. Default: `1`.
* __impurityMeasure__ | `string`: Verunreinigungsmaß (`Gini` oder `Entropie`). Default: `'gini'`.
* __scoreThreshold__ | `number`: Score-Schwelle für Split. Default: `0.01`.
* __maxTreeDepth__ | `number`: maximale Baumtiefe. Default: `20`.
* __minItemsCount__ | `number`: minimale Anzahl von Beobachtungen in Blattknoten. Default: `50`.
* __onPredict__ | `function`: Callback, der beim Klicken auf die Schaltfläche "Vorhersage" mit dem Modellobjekt aufgerufen wird. Default: `none`.


## Beispiele

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

