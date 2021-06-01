---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes feltételezi, hogy az osztályhoz tartozás alapján a prediktorok normális eloszlást követnek.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __y__ | `(string|Factor) (required)`: eredményváltozó. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: egy vagy több előrejelző változó. Default: `none`.
* __quantitative__ | `array<string> (required)`: az "adatok" változóinak tömbje, amelyek "mennyiségi" változók. Default: `none`.
* __omitMissing__ | `boolean`: szabályozza, hogy a hiányzó értékek elhagyhatók-e. Default: `false`.
* __onPredict__ | `function`: callback, amelyet a modellillesztés után az előrejelzésekkel és a maradékokkal hívunk meg. Default: `none`.


## Példák

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

