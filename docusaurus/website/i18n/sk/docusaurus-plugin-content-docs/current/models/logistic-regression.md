---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Logistická regresia.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __y__ | `(string|Factor) (required)`: výsledná premenná. Default: `none`.
* __success__ | `any (required)`: kategória úspešnosti `y`. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna alebo viac prediktívnych premenných. Default: `none`.
* __quantitative__ | `array<string> (required)`: pole premenných v `data`, ktoré sú `kvantitatívne`. Default: `none`.
* __omitMissing__ | `boolean`: kontroluje, či sa majú vynechať chýbajúce hodnoty.. Default: `false`.
* __intercept__ | `boolean`: kontroluje, či sa má použiť model s intercepčným členom. Default: `true`.
* __onPredict__ | `function`: spätné volanie vyvolané s predikciami a rezíduami po fitovaní modelu. Default: `none`.


## Príklady

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

