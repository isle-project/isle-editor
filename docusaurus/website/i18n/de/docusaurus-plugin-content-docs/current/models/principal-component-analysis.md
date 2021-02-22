---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Hauptkomponentenanalyse.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variables__ | `array<string> (required)`: Namen der Variablen, die für das Clustering verwendet werden. Default: `none`.
* __center__ | `boolean`: Mittelwerte durch Subtraktion des Mittelwertes. Default: `true`.
* __scale__ | `boolean`: Skalenwerte durch Teilung mit der Standardabweichung. Default: `false`.
* __noComponents__ | `number`: Anzahl der Komponenten, die an den `onResult`-Callback übergeben werden. Default: `0`.
* __onResult__ | `function`: Callback, der mit Modellobjekt und Komponenten aufgerufen wird. Default: `onResult() {}`.


## Beispiele

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

