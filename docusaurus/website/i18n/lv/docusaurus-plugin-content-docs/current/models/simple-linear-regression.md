---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Vienkāršā lineārā regresija.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __x__ | `string (required)`: skaidrojošais mainīgais. Default: `none`.
* __y__ | `string (required)`: atbildes mainīgais. Default: `none`.
* __group__ | `(string|Factor)`: grupēšanas mainīgais. Default: `none`.
* __omitMissing__ | `boolean`: kontrolē, vai modeļa piemērošanā izlaist trūkstošās vērtības.. Default: `false`.
* __onDiagnostics__ | `function`: izsaukums, kas izsaukts ar diagnostikas zemes gabaliem. Default: `none`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Piemēri

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

