---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Obrysový graf.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot pro každou proměnnou. Default: `none`.
* __x__ | `string (required)`: proměnná na ose x. Default: `none`.
* __y__ | `string (required)`: proměnná na ose y. Default: `none`.
* __overlayPoints__ | `boolean`: řídí, zda se mají překrývat body pro každé pozorování.. Default: `false`.
* __smoothSpan__ | `number`: rozpětí vyhlazování. Default: `0.66`.
* __regressionMethod__ | `array<string>`: pole obsahující `lineární` a/nebo `vyhlazené` pro překrytí lineární a/nebo vyhlazené regresní přímky.. Default: `none`.
* __onSelected__ | `function`: zpětné volání vyvolané při výběru bodů s hodnotami x, y a vybraných bodů. Default: `onSelected() {}`.


## Příklady

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
