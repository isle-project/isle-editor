---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Jednoduchá lineárna regresia.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __x__ | `string (required)`: vysvetľujúca premenná. Default: `none`.
* __y__ | `string (required)`: premenná odpovede. Default: `none`.
* __group__ | `(string|Factor)`: zoskupovanie premenných. Default: `none`.
* __omitMissing__ | `boolean`: kontroluje, či sa majú chýbajúce hodnoty pri fitovaní modelu vynechať.. Default: `false`.
* __onDiagnostics__ | `function`: spätné volanie vyvolané s diagnostickými pozemkami. Default: `none`.
* __onPredict__ | `function`: spätné volanie vyvolané s fitovanými hodnotami a rezíduami. Default: `none`.


## Príklady

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

