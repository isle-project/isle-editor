---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Loģistiskā regresija.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __y__ | `(string|Factor) (required)`: iznākuma mainīgais. Default: `none`.
* __success__ | `any (required)`: `y` veiksmes kategorija. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: viens vai vairāki prognozējošie mainīgie lielumi. Default: `none`.
* __quantitative__ | `array<string> (required)`: `data` mainīgo masīvs, kas ir `kvantitatīvie`.. Default: `none`.
* __omitMissing__ | `boolean`: kontrolē, vai izlaist trūkstošās vērtības.. Default: `false`.
* __intercept__ | `boolean`: kontrolē, vai piemērot modeli ar intercepcijas locekli.. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Piemēri

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

