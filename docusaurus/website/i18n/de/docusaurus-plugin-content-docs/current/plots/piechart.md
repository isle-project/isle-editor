---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Eine Tortendiagramm-Komponente, die standardmäßig die Anzahl aller Kategorien einer ausgewählten Variablen anzeigt.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `string (required)`: Variable zur Anzeige. Default: `none`.
* __group__ | `string`: Gruppierungsvariable. Default: `none`.
* __summaryVariable__ | `string`: optionale Variable, deren Summe für jede `Variable`-Kategorie angezeigt werden soll. Default: `none`.


## Beispiele

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

