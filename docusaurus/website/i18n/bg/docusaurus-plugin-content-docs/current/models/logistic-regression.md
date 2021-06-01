---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Логистична регресия.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __y__ | `(string|Factor) (required)`: променлива на резултата. Default: `none`.
* __success__ | `any (required)`: категория на успеха на `y`. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: една или повече прогнозни променливи.. Default: `none`.
* __quantitative__ | `array<string> (required)`: масив от променливи в `data`, които са `количествени`. Default: `none`.
* __omitMissing__ | `boolean`: контролира дали да се пропускат липсващи стойности.. Default: `false`.
* __intercept__ | `boolean`: контролира дали да се използва модел с член intercept. Default: `true`.
* __onPredict__ | `function`: обратна връзка, извикана с прогнозите и остатъците след напасване на модела. Default: `none`.


## Примери

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

