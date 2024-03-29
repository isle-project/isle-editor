---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Ein Intervalldiagramm.

## Optionen

* __data__ | `object (required)`: Objekt der Wertefelder. Default: `none`.
* __variable__ | `string (required)`: Variable(n) zur Anzeige. Default: `none`.
* __group__ | `(string|Factor)`: Gruppierungsvariable. Default: `none`.
* __orientation__ | `string`: vertikale" oder "horizontale" Ausrichtung. Default: `'vertical'`.
* __significanceLevel__ | `number`: Signifikanzniveau. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: steuert, ob das Signifikanzniveau angepasst werden soll, um die Falschentdeckungsrate zu kontrollieren. Default: `false`.


## Beispiele

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
