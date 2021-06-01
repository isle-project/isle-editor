---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regresijos ir klasifikavimo medžiai.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __y__ | `(string|Factor) (required)`: rezultato kintamasis. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: vienas ar daugiau predikcinių kintamųjų.. Default: `none`.
* __type__ | `string (required)`: `Klasifikavimas` kategoriniams rezultatams arba `Regresija` kiekybiniams rezultatams. Default: `none`.
* __quantitative__ | `array<string> (required)`: `data` kintamųjų, kurie yra `kvantitatyvūs`, masyvas. Default: `none`.
* __impurityMeasure__ | `string`: priemaišų matas (`gini` arba `entropija`). Default: `'gini'`.
* __scoreThreshold__ | `number`: padalijimo balų riba. Default: `0.0075`.
* __maxTreeDepth__ | `number`: didžiausias medžio gylis. Default: `5`.
* __minItemsCount__ | `number`: mažiausias # stebėjimų lapų mazguose. Default: `50`.
* __onPredict__ | `function`: grįžtamasis skambutis, iškviečiamas su modelio objektu, kai paspaudžiamas nuspėti mygtukas. Default: `none`.


## Pavyzdžiai

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

