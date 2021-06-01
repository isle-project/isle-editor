---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Egyszerű lineáris regresszió.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __x__ | `string (required)`: magyarázó változó. Default: `none`.
* __y__ | `string (required)`: válaszváltozó. Default: `none`.
* __group__ | `(string|Factor)`: csoportosító változó. Default: `none`.
* __omitMissing__ | `boolean`: szabályozza, hogy a hiányzó értékeket kihagyja-e a modellillesztés során.. Default: `false`.
* __onDiagnostics__ | `function`: callback, amelyet a diagnosztikai ábrákkal hívnak meg. Default: `none`.
* __onPredict__ | `function`: visszahívás, amelyet az illesztett értékekkel és a maradékokkal hívnak meg. Default: `none`.


## Példák

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

