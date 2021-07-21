---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Simpel lineær regression.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __x__ | `string (required)`: forklarende variabel. Default: `none`.
* __y__ | `string (required)`: responsvariabel. Default: `none`.
* __group__ | `(string|Factor)`: grupperingsvariabel. Default: `none`.
* __omitMissing__ | `boolean`: kontrollerer, om manglende værdier skal udelades ved tilpasning af modellen. Default: `false`.
* __onDiagnostics__ | `function`: callback påkaldt med diagnostiske plot. Default: `none`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Eksempler

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

