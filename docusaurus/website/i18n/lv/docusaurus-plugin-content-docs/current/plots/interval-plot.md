---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Intervāla diagramma.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variable__ | `string (required)`: mainīgais(-ie), kas jāparāda. Default: `none`.
* __group__ | `(string|Factor)`: grupēšanas mainīgais. Default: `none`.
* __orientation__ | `string`: `vertikālā` vai `horizontālā` orientācija. Default: `'vertical'`.
* __significanceLevel__ | `number`: nozīmīguma līmenis. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: kontrolē, vai koriģēt nozīmīguma līmeni, lai kontrolētu viltus atklāšanas koeficientu.. Default: `false`.


## Piemēri

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
