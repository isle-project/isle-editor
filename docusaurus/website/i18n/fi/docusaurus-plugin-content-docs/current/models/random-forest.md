---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Satunnaismetsät.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __y__ | `(string|Factor) (required)`: tulosmuuttuja. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: yksi tai useampi ennustemuuttuja. Default: `none`.
* __type__ | `string`: tällä hetkellä tuetaan vain `Classification` kategorisille vastauksille.. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: joukko `data`:n muuttujia, jotka ovat `kvantitatiivisia`.. Default: `none`.
* __nTrees__ | `number`: puiden lukumäärä. Default: `50`.
* __nTry__ | `number`: kussakin jaossa tarkistettavien ennustajien määrä. Default: `1`.
* __impurityMeasure__ | `string`: epäpuhtauden mitta (`gini` tai `entropia`).. Default: `'gini'`.
* __scoreThreshold__ | `number`: pisteytyksen kynnysarvo jakoa varten. Default: `0.01`.
* __maxTreeDepth__ | `number`: puun suurin syvyys. Default: `20`.
* __minItemsCount__ | `number`: havaintojen vähimmäismäärä lehtisolmuissa. Default: `50`.
* __onPredict__ | `function`: callback, joka käynnistetään malliobjektin kanssa, kun napsautetaan predict-painiketta.. Default: `none`.


## Esimerkkejä

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

