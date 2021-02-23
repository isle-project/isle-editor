---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Eine Häufigkeitstabelle.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `string (required)`: Name der Variable, die angezeigt werden soll. Default: `none`.
* __calculateCounts__ | `boolean`: steuert, ob absolute Zählungen angezeigt werden sollen. Default: `true`.
* __calculateRelative__ | `boolean`: steuert, ob relative Frequenzen angezeigt werden sollen. Default: `false`.
* __group__ | `string`: Name der Gruppierungsvariable. Default: `none`.
* __nDecimalPlaces__ | `number`: Anzahl der Nachkommastellen für relative Häufigkeiten, die in der Tabelle angezeigt werden. Default: `3`.


## Beispiele

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
