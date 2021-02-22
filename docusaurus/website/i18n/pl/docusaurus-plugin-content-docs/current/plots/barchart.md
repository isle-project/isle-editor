---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Wykres słupkowy.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `string (required)`: zmienna do wyświetlania. Default: `none`.
* __group__ | `string`: zmienna grupowania. Default: `none`.
* __yvar__ | `string`: undefined. Default: `none`.
* __summary__ | `string`: nazwa statystyki do obliczenia dla `yvara` i do wyświetlenia jako wysokość słupka dla każdej kategorii. Default: `none`.
* __horizontal__ | `boolean`: czy wyświetlać paski w poziomie. Default: `false`.
* __stackBars__ | `boolean`: podczas grupowania kontroluje, czy pręty należy układać jeden na drugim. Default: `false`.
* __relative__ | `boolean`: czy obliczyć częstotliwości względne wewnątrz każdej grupy. Default: `false`.
* __totalPercent__ | `boolean`: czy wyświetlać paski ogólne jako częstotliwości względne. Default: `false`.
* __xOrder__ | `string`: `ogółem`, `kategorią`, `min`, `max`, `środkiem` lub `medianem`. Default: `none`.
* __direction__ | `string`: jak zamawiać pręty wzdłuż osi x (`skośne` lub `skośne`). Default: `'ascending'`.


## Przykłady

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

