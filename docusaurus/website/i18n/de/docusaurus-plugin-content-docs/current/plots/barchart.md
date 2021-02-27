---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Balkendiagramm.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `string (required)`: Variable zur Anzeige. Default: `none`.
* __group__ | `(string|Factor)`: Gruppierungsvariable. Default: `none`.
* __yvar__ | `string`: undefined. Default: `none`.
* __summary__ | `string`: Name der Statistik, die für `yvar` berechnet und als Balkenhöhe für jede Kategorie angezeigt werden soll. Default: `none`.
* __horizontal__ | `boolean`: ob Balken horizontal angezeigt werden sollen. Default: `false`.
* __stackBars__ | `boolean`: steuert beim Gruppieren, ob Takte übereinander gestapelt werden sollen. Default: `false`.
* __relative__ | `boolean`: ob relative Häufigkeiten innerhalb jeder Gruppe berechnet werden sollen. Default: `false`.
* __totalPercent__ | `boolean`: ob die Gesamtbalken als relative Häufigkeiten angezeigt werden sollen. Default: `false`.
* __xOrder__ | `string`: entweder `Gesamt`, `Kategorie`, `Min`, `Max`, `Mittel`, oder `Median`. Default: `none`.
* __direction__ | `string`: wie die Balken entlang der x-Achse angeordnet werden sollen; `ascending` (aufsteigend) oder `descending` (absteigend). Default: `'ascending'`.


## Beispiele

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

