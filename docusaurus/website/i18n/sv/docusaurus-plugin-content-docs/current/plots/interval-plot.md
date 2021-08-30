---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

En intervalldiagram.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variable__ | `string (required)`: Variabel(er) som ska visas.. Default: `none`.
* __group__ | `(string|Factor)`: grupperingsvariabel. Default: `none`.
* __orientation__ | `string`: vertikal eller horisontell orientering. Default: `'vertical'`.
* __significanceLevel__ | `number`: signifikansnivå. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: kontrollerar om signifikansnivån ska justeras för att kontrollera andelen falska upptäckter.. Default: `false`.


## Exempel

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
