---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Een verspreide plotmatrix.

## Options

* __data__ | `object (required)`: object of value arrays voor elke variabele. Default: `none`.
* __variables__ | `array (required)`: reeks variabelen die in de matrix moeten worden weergegeven. Default: `none`.
* __color__ | `string`: categorische variabele om de kleur van de punten in kaart te brengen. Default: `none`.


## Examples

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

