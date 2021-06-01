---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Viacnásobná lineárna regresia.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __y__ | `string (required)`: výsledná premenná. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna alebo viac prediktívnych premenných. Default: `none`.
* __quantitative__ | `array<string> (required)`: pole premenných v `data`, ktoré sú `kvantitatívne`. Default: `none`.
* __omitMissing__ | `boolean`: kontroluje, či sa majú vynechať chýbajúce hodnoty.. Default: `false`.
* __intercept__ | `boolean`: kontroluje, či sa má použiť model s intercepčným členom. Default: `true`.
* __onDiagnostics__ | `function`: spätné volanie vyvolané s diagnostickými pozemkami. Default: `none`.
* __onPredict__ | `function`: spätné volanie vyvolané s predikciami a rezíduami po fitovaní modelu. Default: `none`.


## Príklady

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

