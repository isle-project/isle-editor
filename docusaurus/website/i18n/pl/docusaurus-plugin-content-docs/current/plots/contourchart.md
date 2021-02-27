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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
        { label: 'Smooth Span', value: 'smoothSpan' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<ContourChart 
    overlayPoints 
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
/>
```

</TabItem>

<TabItem value="regressionMethod">

```jsx live
<ContourChart 
    overlayPoints 
    regressionMethod={['smooth', 'linear']}
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
/>
```

</TabItem>

<TabItem value="smoothSpan">

```jsx live
<ContourChart 
    overlayPoints 
    regressionMethod={['smooth', 'linear']}
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
    smoothSpan={.12}
/>
```

</TabItem>

</Tabs>
