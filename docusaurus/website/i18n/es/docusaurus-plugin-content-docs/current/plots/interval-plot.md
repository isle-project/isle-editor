---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Un gráfico de intervalos.

## Opciones

* __data__ | `object (required)`: objeto de arrays de valores. Default: `none`.
* __variable__ | `string (required)`: undefined. Default: `none`.
* __group__ | `(string|Factor)`: variable de agrupación. Default: `none`.
* __orientation__ | `string`: Orientación `vertical` o `horizontal`.. Default: `'vertical'`.
* __significanceLevel__ | `number`: undefined. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: controla si se ajusta el nivel de significación para controlar la tasa de falsos descubrimientos. Default: `false`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Custom Significance Level', value: 'significance' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" />
```
</TabItem>

<TabItem value="horizontal">

```jsx live
<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" orientation="horizontal" />
```

</TabItem>

<TabItem value="significance">

```jsx live
<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" significanceLevel={0.01} />
```
</TabItem>

</Tabs>
