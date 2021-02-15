---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Een noodtabel.

## Options

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __rowVar__ | `string (required)`: rijtjesvariabele naam. Default: `none`.
* __colVar__ | `string (required)`: kolomvariabele naam. Default: `none`.
* __relativeFreqs__ | `boolean`: controleert of de relatieve frequenties worden weergegeven. Default: `false`.
* __group__ | `string`: naam van de groepsvariabele. Default: `none`.
* __display__ | `array<string>`: of er `Rij-percentage` en/of `Kolom-percentage` moet worden weergegeven. Default: `[]`.
* __nDecimalPlaces__ | `number`: aantal decimalen voor relatieve frequenties weergegeven in de tabel. Default: `3`.


## Examples

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```
