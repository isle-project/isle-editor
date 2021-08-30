---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Интервальный график.

## Варианты

* __data__ | `object (required)`: объект массивов значений. Default: `none`.
* __variable__ | `string (required)`: переменная(ые) для отображения. Default: `none`.
* __group__ | `(string|Factor)`: переменная группировки. Default: `none`.
* __orientation__ | `string`: `вертикальная` или `горизонтальная` ориентация. Default: `'vertical'`.
* __significanceLevel__ | `number`: уровень значимости. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: контролирует, нужно ли корректировать уровень значимости для контроля коэффициента ложных обнаружений. Default: `false`.


## Примеры

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
