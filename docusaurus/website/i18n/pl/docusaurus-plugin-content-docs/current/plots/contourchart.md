---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Wykres konturów.

## Opcje

* __data__ | `object (required)`: obiekt tablice wartości dla każdej zmiennej. Default: `none`.
* __x__ | `string (required)`: Zmienna x-axis. Default: `none`.
* __y__ | `string (required)`: zmienna osi y. Default: `none`.
* __overlayPoints__ | `boolean`: kontroluje czy nakładać punkty dla każdej obserwacji. Default: `false`.
* __smoothSpan__ | `number`: rozpiętość wygładzania. Default: `0.66`.
* __regressionMethod__ | `array<string>`: układ zawierający `liniową` i/lub `gładką` linię regresji do nałożenia liniowej i/lub wygładzonej linii regresji. Default: `none`.
* __onSelected__ | `function`: wywołanie zwrotne, gdy punkty są wybierane za pomocą wartości x, y i wybranych punktów. Default: `onSelected() {}`.


## Przykłady

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

