---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Regresie liniară simplă.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __x__ | `string (required)`: variabilă explicativă. Default: `none`.
* __y__ | `string (required)`: variabilă de răspuns. Default: `none`.
* __group__ | `(string|Factor)`: variabilă de grupare. Default: `none`.
* __omitMissing__ | `boolean`: controlează dacă se omit valorile lipsă în ajustarea modelului. Default: `false`.
* __onDiagnostics__ | `function`: callback invocat cu parcele de diagnosticare. Default: `none`.
* __onPredict__ | `function`: callback invocat cu o funcție de predicție pentru a face predicții pentru date noi. Default: `none`.


## Exemple

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

