---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Een vioolbouwplan.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `string (required)`: weer te geven variabele. Default: `none`.
* __group__ | `(string|Factor)`: groepsvariabele. Default: `none`.
* __showBox__ | `boolean`: bepaalt of er binnenin een boxplot moet worden weergegeven. Default: `false`.


## Voorbeelden

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

