---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO регресия.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __y__ | `string (required)`: променлива на резултата. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: една или повече прогнозни променливи.. Default: `none`.
* __quantitative__ | `array<string> (required)`: масив от променливи в `data`, които са `количествени`. Default: `none`.
* __lambda__ | `number`: параметър на регуларизация. Default: `0.001`.
* __intercept__ | `boolean`: контролира дали да се използва модел с член intercept. Default: `true`.
* __onPredict__ | `function`: обратна връзка, извикана с прогнозите и остатъците след напасване на модела. Default: `onPredict() {}`.


## Примери

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

