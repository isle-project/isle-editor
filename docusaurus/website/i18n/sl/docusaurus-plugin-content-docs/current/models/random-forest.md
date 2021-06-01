---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Naključni gozdovi.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __y__ | `(string|Factor) (required)`: spremenljivka rezultata. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: ena ali več napovednih spremenljivk.. Default: `none`.
* __type__ | `string`: trenutno je za kategorične odgovore podprta samo `Klasifikacija`.. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: polje spremenljivk v `data`, ki so `kvantitativne`. Default: `none`.
* __nTrees__ | `number`: število dreves. Default: `50`.
* __nTry__ | `number`: število napovedovalcev, ki jih je treba preveriti pri vsakem razcepu.. Default: `1`.
* __impurityMeasure__ | `string`: mera nečistoč (`gini` ali `entropija`). Default: `'gini'`.
* __scoreThreshold__ | `number`: prag točk za razdelitev. Default: `0.01`.
* __maxTreeDepth__ | `number`: največja globina drevesa. Default: `20`.
* __minItemsCount__ | `number`: najmanjše število opazovanj v listnih vozliščih. Default: `50`.
* __onPredict__ | `function`: povratni klic, ki se sproži z objektom modela ob kliku na gumb napovedi. Default: `none`.


## Primeri

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

