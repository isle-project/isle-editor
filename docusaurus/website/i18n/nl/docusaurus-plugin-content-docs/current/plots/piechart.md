---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Een taartdiagramcomponent die standaard de tellingen van alle categorieën van een gekozen variabele weergeeft.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `string (required)`: weer te geven variabele. Default: `none`.
* __group__ | `string`: groepsvariabele. Default: `none`.
* __summaryVariable__ | `string`: facultatieve variabele waarvan de som voor elke `variabele` categorie moet worden weergegeven. Default: `none`.


## Voorbeelden

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

