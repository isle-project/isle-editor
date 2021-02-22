---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Histogram.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `string (required)`: zmienna do wyświetlania. Default: `none`.
* __group__ | `string`: zmienna grupowania. Default: `none`.
* __groupMode__ | `string`: czy nakładać na siebie zgrupowane histogramy (`Overlay`), czy też w oddzielnych działkach obok siebie (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: kontroluje, czy wartości gęstości mają być wyświetlane zamiast zliczane na osi y. Default: `false`.
* __densityType__ | `string`: przy wyświetlaniu gęstości można albo nałożyć rozkład parametryczny (`Normalny`, `Uniformalny` lub `Exponential`), albo nieparametryczną ocenę gęstości jądra (`Data-driven`).. Default: `none`.
* __bandwidthAdjust__ | `number`: undefined. Default: `1`.
* __binStrategy__ | `string`: Strategia kosza (`Automatyczna`, `Wybieranie # koszy`, lub `Ustawianie szerokości kosza`). Default: `'Automatic'`.
* __nBins__ | `number`: niestandardowa liczba pojemników. Default: `none`.
* __nCols__ | `number`: liczba kolumn podczas wyświetlania fasetowanego histogramu grupowego. Default: `none`.
* __xBins__ | `{start,size,end}`: obiekt z "startem", "rozmiarem" i "końcowymi" właściwościami regulującymi zachowanie kosza.. Default: `{}`.


## Przykłady

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```

