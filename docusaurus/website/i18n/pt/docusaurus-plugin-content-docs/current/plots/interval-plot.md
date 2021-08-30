---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Uma trama de intervalo.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `string (required)`: variável(eis) a ser exibida(s). Default: `none`.
* __group__ | `(string|Factor)`: variável de agrupamento. Default: `none`.
* __orientation__ | `string`: Orientação `vertical` ou `horizontal`.. Default: `'vertical'`.
* __significanceLevel__ | `number`: nível de significância. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: controla se o nível de significância deve ser ajustado para controlar a taxa de falsas descobertas. Default: `false`.


## Exemplos

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
