---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Działka mozaikowa.

## Opcje

* __data__ | `object (required)`: obiekt tablice wartości dla każdej zmiennej. Default: `none`.
* __variables__ | `array (required)`: szereg zmiennych do wyświetlania. Default: `none`.
* __showColors__ | `boolean`: kontroluje, czy wyświetlane są kolory pokazujące znaczenie. Default: `false`.
* __axisLabels__ | `string`: pozycjonowanie etykiet osi (albo `równolegle do osi`, `poziomo`, `prostopadle do osi`, albo `pionowo`). Default: `'parallel to the axis'`.


## Przykłady

## Examples

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```
