---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Análisis de los componentes principales.

## Options

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variables__ | `array<string> (required)`: nombres de las variables utilizadas para la agrupación. Default: `none`.
* __center__ | `boolean`: centrar los valores restando la media. Default: `true`.
* __scale__ | `boolean`: valores de escala dividiendo con la desviación estándar. Default: `false`.
* __noComponents__ | `number`: el número de componentes suministrados a la llamada "onResultado. Default: `0`.
* __onResult__ | `function`: llamada de retorno invocada con el objeto modelo y los componentes. Default: `onResult() {}`.


## Examples

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

