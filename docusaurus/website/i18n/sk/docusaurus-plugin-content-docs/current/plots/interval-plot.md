---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Intervalový graf.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variable__ | `string (required)`: undefined. Default: `none`.
* __group__ | `(string|Factor)`: zoskupovanie premenných. Default: `none`.
* __orientation__ | `string`: `vertikálna` alebo `horizontálna` orientácia. Default: `'vertical'`.
* __significanceLevel__ | `number`: undefined. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: kontroluje, či sa má upraviť úroveň významnosti na kontrolu miery falošného objavenia.. Default: `false`.


## Príklady

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
