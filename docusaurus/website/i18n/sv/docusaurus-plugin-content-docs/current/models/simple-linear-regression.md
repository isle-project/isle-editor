---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Enkel linjär regression.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __x__ | `string (required)`: Förklarande variabel.. Default: `none`.
* __y__ | `string (required)`: Svarsvariabel.. Default: `none`.
* __group__ | `(string|Factor)`: grupperingsvariabel. Default: `none`.
* __omitMissing__ | `boolean`: kontrollerar om saknade värden ska utelämnas vid modellanpassning. Default: `false`.
* __onDiagnostics__ | `function`: callback som anropas med diagnostiska tomter. Default: `none`.
* __onPredict__ | `function`: callback som anropas med anpassade värden och residualer. Default: `none`.


## Exempel

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

