---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Mapa cieplna do wizualizacji zależności pomiędzy dwoma zmiennymi.

## Opcje

* __data__ | `object (required)`: obiekt tablice wartości dla każdej zmiennej. Default: `none`.
* __x__ | `string (required)`: Zmienna x-axis. Default: `none`.
* __y__ | `string (required)`: zmienna osi y. Default: `none`.
* __group__ | `(string|Factor)`: zmienna grupująca. Default: `none`.
* __overlayPoints__ | `boolean`: kontroluje czy nakładać punkty dla każdej obserwacji. Default: `false`.
* __smoothSpan__ | `number`: rozpiętość wygładzania. Default: `0.66`.
* __regressionMethod__ | `array<string>`: układ zawierający `liniową` i/lub `gładką` linię regresji do nałożenia liniowej i/lub wygładzonej linii regresji. Default: `none`.
* __alternateColor__ | `boolean`: kontroluje, czy należy zastosować alternatywną kolorystykę mapy ciepła. Default: `false`.
* __commonXAxis__ | `boolean`: kontroluje, czy podczas tworzenia wielu map cieplnych na wartość zmiennej grupowej należy używać wspólnej osi x. Default: `false`.
* __commonYAxis__ | `boolean`: kontroluje, czy przy tworzeniu wielu map cieplnych na wartość zmiennej grupowania należy używać wspólnej osi y. Default: `false`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Group', value: 'withGroup' },
        { label: 'Alternate Color', value: 'alternateColor' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
    ]}
    lazy
>



<TabItem value="minimal">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
/>
```

</TabItem>


<TabItem value="withGroup">

```jsx live
<HeatMap 
    alternateColor
    group="Gender"
    data={heartdisease} 
    x="Interventions"
    y="Age"
    commonXAxis
/>
```

</TabItem>

<TabItem value="alternateColor">

```jsx live
<HeatMap 
    alternateColor
    group="Gender"
    data={heartdisease} 
    x="Interventions"
    y="Age"
    commonXAxis
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    overlayPoints 
/>
```

</TabItem>


<TabItem value="regressionMethod">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    regressionMethod={[ 'linear', 'smooth' ]} 
/>
```

</TabItem>

</Tabs>
