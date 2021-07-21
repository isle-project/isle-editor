---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Regresie liniară multiplă.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __y__ | `string (required)`: variabilă de rezultat. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una sau mai multe variabile predictive. Default: `none`.
* __quantitative__ | `array<string> (required)`: matrice de variabile din `data` care sunt `cuantitative`.. Default: `none`.
* __omitMissing__ | `boolean`: controlează dacă se omit valorile lipsă. Default: `false`.
* __intercept__ | `boolean`: controlează dacă se potrivește un model cu un termen de interceptare. Default: `true`.
* __onDiagnostics__ | `function`: callback invocat cu parcele de diagnosticare. Default: `none`.
* __onPredict__ | `function`: callback invocat cu o funcție de predicție pentru a face predicții pentru date noi. Default: `none`.


## Exemple

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

