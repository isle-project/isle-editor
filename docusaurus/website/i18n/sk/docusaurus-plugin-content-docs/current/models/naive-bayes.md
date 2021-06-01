---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes za predpokladu, že prediktory vzhľadom na príslušnosť k triede sa riadia normálnym rozdelením.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __y__ | `(string|Factor) (required)`: výsledná premenná. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna alebo viac prediktívnych premenných. Default: `none`.
* __quantitative__ | `array<string> (required)`: pole premenných v `data`, ktoré sú `kvantitatívne`. Default: `none`.
* __omitMissing__ | `boolean`: kontroluje, či sa majú vynechať chýbajúce hodnoty.. Default: `false`.
* __onPredict__ | `function`: spätné volanie vyvolané s predikciami a rezíduami po fitovaní modelu. Default: `none`.


## Príklady

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

