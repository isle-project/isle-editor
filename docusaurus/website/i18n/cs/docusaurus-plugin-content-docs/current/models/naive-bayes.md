---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes za předpokladu, že prediktory dané příslušností ke třídě mají normální rozdělení.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __y__ | `(string|Factor) (required)`: výsledná proměnná. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna nebo více prediktivních proměnných. Default: `none`.
* __quantitative__ | `array<string> (required)`: pole proměnných v `data`, které jsou `kvantitativní`.. Default: `none`.
* __omitMissing__ | `boolean`: kontroluje, zda se mají vynechat chybějící hodnoty.. Default: `false`.
* __onPredict__ | `function`: zpětné volání vyvolané s předpověďmi a zbytky po fitování modelu. Default: `none`.


## Příklady

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

