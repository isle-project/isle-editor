---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Йерархично клъстеризиране.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variables__ | `array<string> (required)`: имена на променливи, използвани за клъстериране. Default: `none`.
* __linkage__ | `string`: или `пълно`, или `единично`. Default: `'complete'`.
* __distance__ | `string`: използвано разстояние (`евклидово`, `чебишев`, `косинусово`, `хаминг` или `манхатън`). Default: `'euclidean'`.
* __onResult__ | `function`: обратна връзка, задействана с обект на модела. Default: `onResult() {}`.


## Примери

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

