---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Интервална диаграма.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variable__ | `string (required)`: променлива(и) за показване. Default: `none`.
* __group__ | `(string|Factor)`: променлива за групиране. Default: `none`.
* __orientation__ | `string`: `вертикална` или `хоризонтална` ориентация. Default: `'vertical'`.
* __significanceLevel__ | `number`: ниво на значимост. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: контролира дали да се коригира нивото на значимост, за да се контролира коефициентът на фалшиво откриване.. Default: `false`.


## Примери

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
