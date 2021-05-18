---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

Una trama de cajas.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `(array|string) (required)`: variable a mostrar. Default: `none`.
* __group__ | `(array|string|Factor)`: una o dos variables de agrupación. Default: `[]`.
* __orientation__ | `string`: orientación "vertical" u "horizontal". Default: `'vertical'`.
* __overlayPoints__ | `boolean`: controla si se superponen los puntos. Default: `false`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Multiple Variables', value: 'multipleVariables' },
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Overlay Points', value: 'overlayPoints' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Age"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Interventions"
    group="Complications"
/>
```

</TabItem>

<TabItem value="multipleVariables">

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable={[ 'Age', 'Interventions', 'Comorbidities' ]}
/>
```

</TabItem>

<TabItem value="horizontal">

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable={[ 'Age', 'Interventions', 'Comorbidities' ]}
    orientation="horizontal"
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable={[ 'Age', 'Interventions', 'Comorbidities' ]}
    orientation="horizontal"
    overlayPoints
/>
```

</TabItem>

</Tabs>
