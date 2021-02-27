---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Контурная диаграмма.

## Варианты

* __data__ | `object (required)`: массивы значений для каждой переменной. Default: `none`.
* __x__ | `string (required)`: осевая переменная x. Default: `none`.
* __y__ | `string (required)`: переменная оси Y. Default: `none`.
* __overlayPoints__ | `boolean`: контролирует наложение точек для каждого наблюдения. Default: `false`.
* __smoothSpan__ | `number`: период затирки. Default: `0.66`.
* __regressionMethod__ | `array<string>`: массив, содержащий `линейную` и/или `сглаженную` линию регрессии для наложения линии линейной и/или сглаженной регрессии. Default: `none`.
* __onSelected__ | `function`: обратный вызов при выделении точек со значениями x, y и выделенных точек. Default: `onSelected() {}`.


## Примеры

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
