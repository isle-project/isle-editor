---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regresijska in klasifikacijska drevesa.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __y__ | `(string|Factor) (required)`: spremenljivka rezultata. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: ena ali več napovednih spremenljivk.. Default: `none`.
* __type__ | `string (required)`: `Klasifikacija` za kategorične ali `Regresija` za kvantitativne rezultate. Default: `none`.
* __quantitative__ | `array<string> (required)`: polje spremenljivk v `data`, ki so `kvantitativne`. Default: `none`.
* __impurityMeasure__ | `string`: mera nečistoč (`gini` ali `entropija`). Default: `'gini'`.
* __scoreThreshold__ | `number`: prag točk za razdelitev. Default: `0.0075`.
* __maxTreeDepth__ | `number`: največja globina drevesa. Default: `5`.
* __minItemsCount__ | `number`: najmanjše število opazovanj v listnih vozliščih. Default: `50`.
* __onPredict__ | `function`: povratni klic, ki se sproži z objektom modela ob kliku na gumb napovedi. Default: `none`.


## Primeri

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

