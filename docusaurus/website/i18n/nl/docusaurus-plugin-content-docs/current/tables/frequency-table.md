---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Een frequentietabel.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `string (required)`: naam van de weer te geven variabele. Default: `none`.
* __calculateCounts__ | `boolean`: controleert of er absolute tellingen worden weergegeven. Default: `true`.
* __calculateRelative__ | `boolean`: controleert of de relatieve frequenties worden weergegeven. Default: `false`.
* __group__ | `(string|Factor)`: naam van de groepsvariabele. Default: `none`.
* __nDecimalPlaces__ | `number`: aantal decimalen voor relatieve frequenties weergegeven in de tabel. Default: `3`.


## Voorbeelden

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
