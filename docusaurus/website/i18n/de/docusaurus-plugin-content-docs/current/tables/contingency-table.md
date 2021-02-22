---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Eine Kontingenztabelle.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __rowVar__ | `string (required)`: Zeilenvariablenname. Default: `none`.
* __colVar__ | `string (required)`: Spaltenvariablenname. Default: `none`.
* __relativeFreqs__ | `boolean`: steuert, ob relative Frequenzen angezeigt werden sollen. Default: `false`.
* __group__ | `string`: Name der Gruppierungsvariable. Default: `none`.
* __display__ | `array<string>`: ob `Row Percent` und/oder `Column Percent` angezeigt werden soll. Default: `[]`.
* __nDecimalPlaces__ | `number`: Anzahl der Nachkommastellen für relative Häufigkeiten, die in der Tabelle angezeigt werden. Default: `3`.


## Beispiele

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```
