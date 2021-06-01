---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes eeldades, et klassi kuulumise kohta antud ennustajad järgivad normaaljaotust.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __y__ | `(string|Factor) (required)`: tulemusmuutuja. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: üks või mitu ennustavat muutujat. Default: `none`.
* __quantitative__ | `array<string> (required)`: muutujate massiivi "andmed", mis on "kvantitatiivsed".. Default: `none`.
* __omitMissing__ | `boolean`: kontrollib, kas puuduvad väärtused jäetakse välja. Default: `false`.
* __onPredict__ | `function`: callback, mida kutsutakse üles koos prognooside ja jääkidega pärast mudeli sobitamist. Default: `none`.


## Näited

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

