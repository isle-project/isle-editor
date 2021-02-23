---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Tabela częstotliwości.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `string (required)`: nazwa zmiennej, która ma być wyświetlana. Default: `none`.
* __calculateCounts__ | `boolean`: kontroluje, czy wyświetlane są liczby bezwzględne. Default: `true`.
* __calculateRelative__ | `boolean`: kontroluje, czy wyświetlane są częstotliwości względne. Default: `false`.
* __group__ | `string`: nazwa zmiennej grupującej. Default: `none`.
* __nDecimalPlaces__ | `number`: liczba miejsc po przecinku dla częstotliwości względnych wyświetlanych w tabeli. Default: `3`.


## Przykłady

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
