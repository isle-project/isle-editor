---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Множествена линейна регресия.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __y__ | `string (required)`: променлива на резултата. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: една или повече прогнозни променливи.. Default: `none`.
* __quantitative__ | `array<string> (required)`: масив от променливи в `data`, които са `количествени`. Default: `none`.
* __omitMissing__ | `boolean`: контролира дали да се пропускат липсващи стойности.. Default: `false`.
* __intercept__ | `boolean`: контролира дали да се използва модел с член intercept. Default: `true`.
* __onDiagnostics__ | `function`: обратна връзка, извикана с диагностични участъци. Default: `none`.
* __onPredict__ | `function`: обратна връзка, извикана с функция за предсказване, за да се направят прогнози за нови данни.. Default: `none`.


## Примери

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

