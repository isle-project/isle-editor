---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Składnik wykresu kołowego, który domyślnie wyświetla zliczenia wszystkich kategorii z wybranej zmiennej.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `string (required)`: zmienna do wyświetlania. Default: `none`.
* __group__ | `(string|Factor)`: zmienna grupowania. Default: `none`.
* __summaryVariable__ | `string`: nieobowiązkowa zmienna, której suma do wyświetlenia dla każdej kategorii "zmiennej. Default: `none`.


## Przykłady

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

