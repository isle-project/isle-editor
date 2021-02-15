---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Mapa cieplna do wizualizacji zależności pomiędzy dwoma zmiennymi.

## Options

* __data__ | `object (required)`: obiekt tablice wartości dla każdej zmiennej. Default: `none`.
* __x__ | `string (required)`: Zmienna x-axis. Default: `none`.
* __y__ | `string (required)`: zmienna osi y. Default: `none`.
* __overlayPoints__ | `boolean`: kontroluje czy nakładać punkty dla każdej obserwacji. Default: `false`.
* __smoothSpan__ | `number`: rozpiętość wygładzania. Default: `0.66`.
* __regressionMethod__ | `array<string>`: układ zawierający `liniową` i/lub `gładką` linię regresji do nałożenia liniowej i/lub wygładzonej linii regresji. Default: `none`.
* __alternateColor__ | `boolean`: kontroluje, czy należy zastosować alternatywną kolorystykę mapy ciepła. Default: `false`.
* __commonXAxis__ | `boolean`: kontroluje, czy podczas tworzenia wielu map cieplnych na wartość zmiennej grupowej należy używać wspólnej osi x. Default: `false`.
* __commonYAxis__ | `boolean`: kontroluje, czy przy tworzeniu wielu map cieplnych na wartość zmiennej grupowania należy używać wspólnej osi y. Default: `false`.


## Examples

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
/>
```

