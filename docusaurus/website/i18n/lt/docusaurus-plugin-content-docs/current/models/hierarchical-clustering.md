---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarchinis klasterizavimas.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variables__ | `array<string> (required)`: klasterizacijai naudojamų kintamųjų pavadinimai. Default: `none`.
* __linkage__ | `string`: arba `komplektinis`, arba `vienkartinis`.. Default: `'complete'`.
* __distance__ | `string`: naudojamas atstumas (`euklidinis`, `čebyševo`, `kozininis`, `hamingo` arba `manhatano`). Default: `'euclidean'`.
* __onResult__ | `function`: atgalinis skambutis, iškviečiamas su modelio objektu. Default: `onResult() {}`.


## Pavyzdžiai

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

