---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Többszörös lineáris regresszió.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __y__ | `string (required)`: eredményváltozó. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: egy vagy több előrejelző változó. Default: `none`.
* __quantitative__ | `array<string> (required)`: az "adatok" változóinak tömbje, amelyek "mennyiségi" változók. Default: `none`.
* __omitMissing__ | `boolean`: szabályozza, hogy a hiányzó értékek elhagyhatók-e. Default: `false`.
* __intercept__ | `boolean`: szabályozza, hogy a modellhez illesszenek-e intercept-termet. Default: `true`.
* __onDiagnostics__ | `function`: callback, amelyet diagnosztikai ábrákkal hívnak meg. Default: `none`.
* __onPredict__ | `function`: visszahívás, amelyet egy előrejelző függvénnyel hívnak meg, hogy előrejelzéseket készítsen az új adatokra vonatkozóan. Default: `none`.


## Példák

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

