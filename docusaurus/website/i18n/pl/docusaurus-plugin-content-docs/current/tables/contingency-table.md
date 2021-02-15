---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Tablica awaryjna.

## Options

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __rowVar__ | `string (required)`: wiersz nazwa zmienna. Default: `none`.
* __colVar__ | `string (required)`: kolumna nazwa zmiennej. Default: `none`.
* __relativeFreqs__ | `boolean`: kontroluje, czy wyświetlane są częstotliwości względne. Default: `false`.
* __group__ | `string`: nazwa zmiennej grupującej. Default: `none`.
* __display__ | `array<string>`: czy wyświetlać `Row Percent` i/lub `Column Percent`. Default: `[]`.
* __nDecimalPlaces__ | `number`: liczba miejsc po przecinku dla częstotliwości względnych wyświetlanych w tabeli. Default: `3`.


## Examples

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```
