---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Yksinkertainen lineaarinen regressio.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __x__ | `string (required)`: selittävä muuttuja. Default: `none`.
* __y__ | `string (required)`: vastemuuttuja. Default: `none`.
* __group__ | `(string|Factor)`: ryhmittelymuuttuja. Default: `none`.
* __omitMissing__ | `boolean`: valvoo, jätetäänkö puuttuvat arvot pois mallin sovituksessa.. Default: `false`.
* __onDiagnostics__ | `function`: callback kutsutaan diagnostisten tonttien kanssa. Default: `none`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Esimerkkejä

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

