---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Staafdiagram.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `string (required)`: weer te geven variabele. Default: `none`.
* __group__ | `(string|Factor)`: groepsvariabele. Default: `none`.
* __yvar__ | `string`: undefined. Default: `none`.
* __summary__ | `string`: naam van de statistiek om te berekenen voor `yvar` en te worden weergegeven als staafhoogte voor elke categorie. Default: `none`.
* __horizontal__ | `boolean`: het al dan niet horizontaal weergeven van balken. Default: `false`.
* __stackBars__ | `boolean`: bij het groeperen controleert of de staven op elkaar gestapeld moeten worden. Default: `false`.
* __relative__ | `boolean`: of de relatieve frequenties binnen elke groep moeten worden berekend. Default: `false`.
* __totalPercent__ | `boolean`: het al dan niet weergeven van de algemene balken als relatieve frequenties. Default: `false`.
* __xOrder__ | `string`: ofwel `totaal`, `categorie`, `min`, `max`, `mean`, of `median`.. Default: `none`.
* __direction__ | `string`: hoe bestelt u de staven naast de x-as ('neerwaarts' of 'neerwaarts')?. Default: `'ascending'`.


## Voorbeelden

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

