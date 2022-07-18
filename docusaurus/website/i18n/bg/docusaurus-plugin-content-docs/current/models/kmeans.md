---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

К-средства за клъстериране.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variables__ | `array<string> (required)`: имена на променливи, използвани за клъстериране. Default: `none`.
* __K__ | `number`: брой клъстери. Default: `3`.
* __elbowPlot__ | `boolean`: булева, която показва дали да се включи графиката на лакътя. Default: `false`.
* __initialization__ | `string`: метод за инициализация (`kmeans++`, `random` или `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: обратна връзка, задействана с обект на модела. Default: `onResult() {}`.


## Примери

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

