---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Тепловая карта для визуализации связи между двумя переменными.

## Варианты

* __data__ | `object (required)`: массивы значений для каждой переменной. Default: `none`.
* __x__ | `string (required)`: осевая переменная x. Default: `none`.
* __y__ | `string (required)`: переменная оси Y. Default: `none`.
* __group__ | `(string|Factor)`: переменная группировки. Default: `none`.
* __overlayPoints__ | `boolean`: контролирует наложение точек для каждого наблюдения. Default: `false`.
* __smoothSpan__ | `number`: период затирки. Default: `0.66`.
* __regressionMethod__ | `array<string>`: массив, содержащий `линейную` и/или `сглаженную` линию регрессии для наложения линии линейной и/или сглаженной регрессии. Default: `none`.
* __alternateColor__ | `boolean`: контролирует, следует ли использовать альтернативную цветовую схему для карты теплоснабжения. Default: `false`.
* __commonXAxis__ | `boolean`: контролирует, использовать ли общую ось х при создании нескольких тепловых карт на значение переменной группировки. Default: `false`.
* __commonYAxis__ | `boolean`: контролирует использование общей оси y при создании нескольких тепловых карт на значение переменной группировки. Default: `false`.


## Примеры

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
