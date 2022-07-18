---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

К-значит, кластеризация.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variables__ | `array<string> (required)`: имена переменных, используемых для кластеризации. Default: `none`.
* __K__ | `number`: количество кластеров. Default: `3`.
* __elbowPlot__ | `boolean`: булево значение, указывающее, следует ли включать в график локти. Default: `false`.
* __initialization__ | `string`: метод инициализации (`kmeans++`, `random`, или `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: обратный вызов с помощью модельного объекта. Default: `onResult() {}`.


## Примеры

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

