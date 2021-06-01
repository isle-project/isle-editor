---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regressio- ja luokittelupuut.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __y__ | `(string|Factor) (required)`: tulosmuuttuja. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: yksi tai useampi ennustemuuttuja. Default: `none`.
* __type__ | `string (required)`: `Classification` kategorisille tai `Regression` kvantitatiivisille tuloksille.. Default: `none`.
* __quantitative__ | `array<string> (required)`: joukko `data`:n muuttujia, jotka ovat `kvantitatiivisia`.. Default: `none`.
* __impurityMeasure__ | `string`: epäpuhtauden mitta (`gini` tai `entropia`).. Default: `'gini'`.
* __scoreThreshold__ | `number`: pisteytyksen kynnysarvo jakoa varten. Default: `0.0075`.
* __maxTreeDepth__ | `number`: puun suurin syvyys. Default: `5`.
* __minItemsCount__ | `number`: havaintojen vähimmäismäärä lehtisolmuissa. Default: `50`.
* __onPredict__ | `function`: callback, joka käynnistetään malliobjektin kanssa, kun napsautetaan predict-painiketta.. Default: `none`.


## Esimerkkejä

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

