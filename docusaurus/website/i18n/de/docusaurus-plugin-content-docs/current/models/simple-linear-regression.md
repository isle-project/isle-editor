---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Einfache lineare Regression.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __x__ | `string (required)`: erklärende Variable. Default: `none`.
* __y__ | `string (required)`: Reaktionsvariable. Default: `none`.
* __group__ | `string`: Gruppierungsvariable. Default: `none`.
* __omitMissing__ | `boolean`: steuert, ob fehlende Werte bei der Modellanpassung ausgelassen werden sollen. Default: `false`.
* __onDiagnostics__ | `function`: Callback, der mit Diagnoseplots aufgerufen wird. Default: `none`.
* __onPredict__ | `function`: Callback, der mit angepassten Werten und Residuen aufgerufen wird. Default: `none`.


## Beispiele

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

