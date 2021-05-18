---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Eine Lernkomponente zur Veranschaulichung des zentralen Grenzwertsatzes (CLT) bei der Stichprobenziehung aus einem gelieferten Datensatz.

## Optionen

* __data__ | `object (required)`: Datenobjekt, dessen Schlüssel den Variablennamen entsprechen und dessen Werte die Werte der jeweiligen Variablen enthalten. Default: `none`.
* __hidePopulationStdev__ | `boolean`: Anzeige der Standardabweichung der Grundgesamtheit ausblenden. Default: `false`.
* __samples__ | `(array<number>|number)`: Array von Zahlen oder eine einzelne Zahl, die den Stichprobenumfang angibt, der gezogen werden kann. Default: `25`.
* __populationProbabilities__ | `boolean`: ob Gleichungen zur Berechnung von Populationswahrscheinlichkeiten angezeigt werden sollen. Default: `false`.
* __quantiles__ | `boolean`: ob das Werkzeug zur Berechnung beliebiger Quantile angezeigt werden soll. Default: `false`.
* __variables__ | `array (required)`: Namen von Variablen, die abgetastet werden können. Default: `none`.


## Beispiele

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

