---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Gadījuma meži.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __y__ | `(string|Factor) (required)`: iznākuma mainīgais. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: viens vai vairāki prognozējošie mainīgie lielumi. Default: `none`.
* __type__ | `string`: pašlaik tiek atbalstīta tikai `Klasifikācija` kategoriskām atbildēm.. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: `data` mainīgo masīvs, kas ir `kvantitatīvie`.. Default: `none`.
* __nTrees__ | `number`: koku skaits. Default: `50`.
* __nTry__ | `number`: katrā sadalījumā pārbaudāmo prognozētāju skaits. Default: `1`.
* __impurityMeasure__ | `string`: piemaisījumu mērs (`gini` vai `entropija`). Default: `'gini'`.
* __scoreThreshold__ | `number`: sadalīšanas slieksnis. Default: `0.01`.
* __maxTreeDepth__ | `number`: maksimālais koka dziļums. Default: `20`.
* __minItemsCount__ | `number`: minimālais novērojumu skaits lapu mezglos. Default: `50`.
* __onPredict__ | `function`: atsauces izsaukums, kas tiek izsaukts ar modeļa objektu, noklikšķinot uz pogas prognozēt.. Default: `none`.


## Piemēri

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

