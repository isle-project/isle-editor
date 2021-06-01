---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes utgår från att prediktorerna, givet klasstillhörigheten, följer en normalfördelning.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __y__ | `(string|Factor) (required)`: utfallsvariabel.. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: en eller flera prediktionsvariabler. Default: `none`.
* __quantitative__ | `array<string> (required)`: en matris med variabler i "data" som är "kvantitativa".. Default: `none`.
* __omitMissing__ | `boolean`: kontrollerar om saknade värden ska utelämnas. Default: `false`.
* __onPredict__ | `function`: callback som anropas med förutsägelser och residualer efter modellanpassning.. Default: `none`.


## Exempel

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

