---
id: density-plot
title: Density Plot
sidebar_label: Density Plot
---

Składnik powierzchni o gęstości d3.

## Opcje

* __bandwidth__ | `number`: parametr wygładzający dla estymatora gęstości jądra. Default: `4`.
* __histogram__ | `boolean`: pokazać histogram obok wykresu gęstości. Default: `true`.
* __nBins__ | `number`: liczba pojemników na histogram.. Default: `8`.
* __vline__ | `object`: jeśli jest dostarczony, wyświetli pionową linię na dostarczonej `wartości` z danym `etykietą`. Default: `none`.
* __xlab__ | `string`: Etykieta osi x. Default: `'value'`.
* __xmax__ | `number`: maksymalna wartość wyświetlana na osi x. Default: `1`.
* __xmin__ | `number`: minimalna wartość wyświetlana na osi x. Default: `0`.
* __ymax__ | `number`: maksymalna wartość wyświetlana na osi y. Default: `0.15`.


## Przykłady

```jsx live
<DensityPlot
    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}
    xmin={0}
    xmax={100}
    ymax={0.5}
/>
```

