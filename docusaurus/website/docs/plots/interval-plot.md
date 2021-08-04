---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

An interval plot.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `string (required)`: variable(s) to display. Default: `none`.
* __group__ | `(string|Factor)`: grouping variable. Default: `none`.
* __orientation__ | `string`: `vertical` or `horizontal` orientation. Default: `'vertical'`.
* __significanceLevel__ | `number`: significance level. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: controls whether to adjust the significance level to control the false discovery rate. Default: `false`.


## Examples

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
