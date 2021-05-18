---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Un gráfico de contorno.

## Opciones

* __data__ | `object (required)`: objeto de matrices de valores para cada variable. Default: `none`.
* __x__ | `string (required)`: variable del eje x. Default: `none`.
* __y__ | `string (required)`: variable del eje y. Default: `none`.
* __overlayPoints__ | `boolean`: controla si se superponen puntos para cada observación. Default: `false`.
* __smoothSpan__ | `number`: el intervalo de suavizado. Default: `0.66`.
* __regressionMethod__ | `array<string>`: que contiene "lineal" y/o "suave" para superponer una línea de regresión lineal y/o suave. Default: `none`.
* __onSelected__ | `function`: llamada de retorno cuando se seleccionan los puntos con los valores x, y y los puntos seleccionados. Default: `onSelected() {}`.


## Ejemplos

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
