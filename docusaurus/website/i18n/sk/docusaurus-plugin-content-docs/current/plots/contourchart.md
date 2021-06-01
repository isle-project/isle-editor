---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Obrysový diagram.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt pre každú premennú. Default: `none`.
* __x__ | `string (required)`: Premenná na osi x. Default: `none`.
* __y__ | `string (required)`: premenná na osi y. Default: `none`.
* __overlayPoints__ | `boolean`: kontroluje, či sa majú prekrývať body pre každé pozorovanie.. Default: `false`.
* __smoothSpan__ | `number`: vyhladzovacie rozpätie. Default: `0.66`.
* __regressionMethod__ | `array<string>`: pole obsahujúce `lineárne` a/alebo `vyhladené` na prekrytie lineárnej a/alebo vyhladenej regresnej priamky. Default: `none`.
* __onSelected__ | `function`: spätné volanie vyvolané pri výbere bodov s hodnotami x, y a vybraných bodov. Default: `onSelected() {}`.


## Príklady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
        { label: 'Smooth Span', value: 'smoothSpan' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<ContourChart 
    overlayPoints 
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
/>
```

</TabItem>

<TabItem value="regressionMethod">

```jsx live
<ContourChart 
    overlayPoints 
    regressionMethod={['smooth', 'linear']}
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
/>
```

</TabItem>

<TabItem value="smoothSpan">

```jsx live
<ContourChart 
    overlayPoints 
    regressionMethod={['smooth', 'linear']}
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
    smoothSpan={.12}
/>
```

</TabItem>

</Tabs>
