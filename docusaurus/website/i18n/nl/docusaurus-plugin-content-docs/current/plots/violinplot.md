---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Een vioolbouwplan.

## Options

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `string (required)`: weer te geven variabele. Default: `none`.
* __group__ | `string`: groepsvariabele. Default: `none`.
* __showBox__ | `boolean`: bepaalt of er binnenin een boxplot moet worden weergegeven. Default: `false`.


## Examples

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

