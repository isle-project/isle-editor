---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Проста линейна регресия.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __x__ | `string (required)`: обяснителна променлива. Default: `none`.
* __y__ | `string (required)`: променлива на отговора. Default: `none`.
* __group__ | `(string|Factor)`: променлива за групиране. Default: `none`.
* __omitMissing__ | `boolean`: контролира дали да се пропускат липсващите стойности при напасването на модела. Default: `false`.
* __onDiagnostics__ | `function`: обратна връзка, извикана с диагностични участъци. Default: `none`.
* __onPredict__ | `function`: обратна връзка, извикана с функция за предсказване, за да се направят прогнози за нови данни.. Default: `none`.


## Примери

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

