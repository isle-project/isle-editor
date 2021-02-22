---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Eine Geigenhandlung.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `string (required)`: Variable zur Anzeige. Default: `none`.
* __group__ | `string`: Gruppierungsvariable. Default: `none`.
* __showBox__ | `boolean`: steuert, ob ein Boxplot im Inneren angezeigt werden soll. Default: `false`.


## Beispiele

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

