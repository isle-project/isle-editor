---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Atsitiktiniai miškai.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __y__ | `(string|Factor) (required)`: rezultato kintamasis. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: vienas ar daugiau predikcinių kintamųjų.. Default: `none`.
* __type__ | `string`: šiuo metu palaikoma tik `Klasifikacija` kategoriniams atsakymams.. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: `data` kintamųjų, kurie yra `kvantitatyvūs`, masyvas. Default: `none`.
* __nTrees__ | `number`: medžių skaičius. Default: `50`.
* __nTry__ | `number`: prognozuojamų veiksnių, kuriuos reikia patikrinti kiekvieno padalijimo metu, skaičius. Default: `1`.
* __impurityMeasure__ | `string`: priemaišų matas (`gini` arba `entropija`). Default: `'gini'`.
* __scoreThreshold__ | `number`: padalijimo balų riba. Default: `0.01`.
* __maxTreeDepth__ | `number`: didžiausias medžio gylis. Default: `20`.
* __minItemsCount__ | `number`: mažiausias # stebėjimų lapų mazguose. Default: `50`.
* __onPredict__ | `function`: grįžtamasis skambutis, iškviečiamas su modelio objektu, kai paspaudžiamas nuspėti mygtukas. Default: `none`.


## Pavyzdžiai

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

