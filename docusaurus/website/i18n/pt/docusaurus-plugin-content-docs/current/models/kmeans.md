---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K significa agrupamento.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variables__ | `array<string> (required)`: nomes de variáveis utilizadas para agrupamento. Default: `none`.
* __K__ | `number`: número de clusters. Default: `3`.
* __elbowPlot__ | `boolean`: booleano indicando se deve incluir o enredo do cotovelo. Default: `false`.
* __initialization__ | `string`: método de inicialização (`kmeans++`, `random`, ou `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: chamada de retorno invocada com o objeto modelo. Default: `onResult() {}`.


## Exemplos

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

