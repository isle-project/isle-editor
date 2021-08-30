---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Intervallum diagram.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variable__ | `string (required)`: megjelenítendő változó(k). Default: `none`.
* __group__ | `(string|Factor)`: csoportosító változó. Default: `none`.
* __orientation__ | `string`: "függőleges" vagy "vízszintes" orientáció. Default: `'vertical'`.
* __significanceLevel__ | `number`: szignifikancia szint. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: szabályozza, hogy a szignifikanciaszintet a hamis felfedezési arány ellenőrzése érdekében állítsák-e be.. Default: `false`.


## Példák

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
