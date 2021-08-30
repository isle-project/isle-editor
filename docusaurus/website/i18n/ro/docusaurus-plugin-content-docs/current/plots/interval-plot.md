---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Un grafic de interval.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variable__ | `string (required)`: variabila (variabilele) de afișat. Default: `none`.
* __group__ | `(string|Factor)`: variabilă de grupare. Default: `none`.
* __orientation__ | `string`: orientarea `verticală` sau `orizontală`.. Default: `'vertical'`.
* __significanceLevel__ | `number`: nivelul de semnificație. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: controlează dacă trebuie ajustat nivelul de semnificație pentru a controla rata de descoperire falsă. Default: `false`.


## Exemple

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
