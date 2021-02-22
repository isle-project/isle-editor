---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Иерархическая кластеризация.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variables__ | `array<string> (required)`: имена переменных, используемых для кластеризации. Default: `none`.
* __linkage__ | `string`: либо "полный", либо "единственный".. Default: `'complete'`.
* __distance__ | `string`: использованное расстояние (`евклидовое`, `чебышев`, `косинус`, `хамминг`, или `манхэттен`).. Default: `'euclidean'`.
* __onResult__ | `function`: обратный вызов с помощью модельного объекта. Default: `onResult() {}`.


## Примеры

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

