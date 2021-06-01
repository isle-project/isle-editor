---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Logisztikus regresszió.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __y__ | `(string|Factor) (required)`: eredményváltozó. Default: `none`.
* __success__ | `any (required)`: az "y" sikerkategóriája. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: egy vagy több előrejelző változó. Default: `none`.
* __quantitative__ | `array<string> (required)`: az "adatok" változóinak tömbje, amelyek "mennyiségi" változók. Default: `none`.
* __omitMissing__ | `boolean`: szabályozza, hogy a hiányzó értékek elhagyhatók-e. Default: `false`.
* __intercept__ | `boolean`: szabályozza, hogy a modellhez illesszenek-e intercept-termet. Default: `true`.
* __onPredict__ | `function`: callback, amelyet a modellillesztés után az előrejelzésekkel és a maradékokkal hívunk meg. Default: `none`.


## Példák

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

