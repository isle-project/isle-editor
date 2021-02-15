---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Oblicza minimalną i maksymalną wartość tablicy.

## Options

* __data__ | `object (required)`: obiekt tablice wartości dla każdej zmiennej. Default: `none`.
* __xval__ | `string (required)`: zmienna do wyświetlania na osi x. Default: `none`.
* __yval__ | `string (required)`: zmienna do wyświetlania na osi y. Default: `none`.
* __text__ | `string`: teksty, które mają być wyświetlane obok każdego punktu. Default: `none`.
* __color__ | `string`: zmienna kategoryczna do mapy do koloru punktów. Default: `none`.
* __type__ | `string`: zmienna kategoryczna do mapowania na wyświetlane symbole. Default: `none`.
* __size__ | `string`: zmienna ilościowa do mapowania do wielkości punktów. Default: `none`.
* __regressionLine__ | `boolean`: kontroluje, czy nakładać linię(-y) regresji. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` i/lub `smooth` do wyświetlania regresji liniowej i wygładzonej linii regresji LOWESS'a. Default: `[
  'linear'
]`.
* __lineBy__ | `string`: wyświetlać oddzielną linię regresji dla każdej kategorii określonej zmiennej kategorycznej. Default: `none`.
* __smoothSpan__ | `number`: parametr rozpiętości wygładzania dla linii regresji `gładkiej`. Default: `0.66`.


## Examples

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

