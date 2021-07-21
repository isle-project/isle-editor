---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO regresszió.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __y__ | `string (required)`: eredményváltozó. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: egy vagy több előrejelző változó. Default: `none`.
* __quantitative__ | `array<string> (required)`: az "adatok" változóinak tömbje, amelyek "mennyiségi" változók. Default: `none`.
* __lambda__ | `number`: regularizációs paraméter. Default: `0.001`.
* __intercept__ | `boolean`: szabályozza, hogy a modellhez illesszenek-e intercept-termet. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `onPredict() {}`.


## Példák

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

