---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

Regresija LASSO.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __y__ | `string (required)`: spremenljivka rezultata. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: ena ali več napovednih spremenljivk.. Default: `none`.
* __quantitative__ | `array<string> (required)`: polje spremenljivk v `data`, ki so `kvantitativne`. Default: `none`.
* __lambda__ | `number`: parameter regularizacije. Default: `0.001`.
* __intercept__ | `boolean`: določa, ali naj se model prilagodi z izrazom intercept.. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `onPredict() {}`.


## Primeri

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

