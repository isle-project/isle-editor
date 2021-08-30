---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Wykres interwałowy.

## Opcje

* __data__ | `object (required)`: obiekt tablic wartości. Default: `none`.
* __variable__ | `string (required)`: zmienna(-e) do wyświetlenia. Default: `none`.
* __group__ | `(string|Factor)`: zmienna grupująca. Default: `none`.
* __orientation__ | `string`: orientacja `pionowa` lub `pozioma`.. Default: `'vertical'`.
* __significanceLevel__ | `number`: poziom istotności. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: kontroluje, czy dostosować poziom istotności w celu kontroli współczynnika fałszywego wykrycia.. Default: `false`.


## Przykłady

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
