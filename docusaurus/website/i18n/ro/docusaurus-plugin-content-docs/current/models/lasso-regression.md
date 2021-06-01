---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

Regresia LASSO.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __y__ | `string (required)`: variabilă de rezultat. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una sau mai multe variabile predictive. Default: `none`.
* __quantitative__ | `array<string> (required)`: matrice de variabile din `data` care sunt `cuantitative`.. Default: `none`.
* __lambda__ | `number`: parametrul de regularizare. Default: `0.001`.
* __intercept__ | `boolean`: controlează dacă se potrivește un model cu un termen de interceptare. Default: `true`.
* __onPredict__ | `function`: callback invocat cu predicțiile și reziduurile după ajustarea modelului. Default: `onPredict() {}`.


## Exemple

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

