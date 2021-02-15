---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Uma matriz de dispersão de lotes.

## Options

* __data__ | `object (required)`: objeto de arrays de valor para cada variável. Default: `none`.
* __variables__ | `array (required)`: matriz de variáveis para exibir em matriz. Default: `none`.
* __color__ | `string`: variável categórica para mapear a cor dos pontos. Default: `none`.


## Examples

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

