---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarhiskā klasterizācija.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variables__ | `array<string> (required)`: klasterizēšanai izmantoto mainīgo nosaukumi. Default: `none`.
* __linkage__ | `string`: vai nu `pilnīgs`, vai `vienreizējs`.. Default: `'complete'`.
* __distance__ | `string`: izmantotais attālums (`eiklīda`, `Ķebyševa`, `kozīns`, `haminga` vai `manhetena`).. Default: `'euclidean'`.
* __onResult__ | `function`: callback, kas izsaukts ar modeļa objektu. Default: `onResult() {}`.


## Piemēri

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

