---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Intervalni diagram.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variable__ | `string (required)`: spremenljivke, ki jih želite prikazati. Default: `none`.
* __group__ | `(string|Factor)`: spremenljivka za razvrščanje v skupine. Default: `none`.
* __orientation__ | `string`: `vertikalna` ali `vodoravna` usmerjenost. Default: `'vertical'`.
* __significanceLevel__ | `number`: raven pomembnosti. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: nadzoruje, ali naj se raven pomembnosti prilagodi za nadzor stopnje napačnega odkritja.. Default: `false`.


## Primeri

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
