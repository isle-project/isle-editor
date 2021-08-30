---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Intervalinis sklypas.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variable__ | `string (required)`: rodomas (-i) kintamasis (-ieji). Default: `none`.
* __group__ | `(string|Factor)`: grupavimo kintamasis. Default: `none`.
* __orientation__ | `string`: `vertikali` arba `horizontali` orientacija. Default: `'vertical'`.
* __significanceLevel__ | `number`: reikšmingumo lygis. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: kontroliuoja, ar reikia koreguoti reikšmingumo lygį, kad būtų kontroliuojamas klaidingo atradimo lygis.. Default: `false`.


## Pavyzdžiai

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
