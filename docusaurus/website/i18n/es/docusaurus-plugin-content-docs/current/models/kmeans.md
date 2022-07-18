---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K significa agrupación.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variables__ | `array<string> (required)`: nombres de las variables utilizadas para la agrupación. Default: `none`.
* __K__ | `number`: número de grupos. Default: `3`.
* __elbowPlot__ | `boolean`: booleano que indica si se incluye el gráfico del codo. Default: `false`.
* __initialization__ | `string`: método de inicialización ("significa++", "aleatorio", o "más distante"). Default: `'kmeans++'`.
* __onResult__ | `function`: llamada de retorno invocada con el objeto modelo. Default: `onResult() {}`.


## Ejemplos

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

