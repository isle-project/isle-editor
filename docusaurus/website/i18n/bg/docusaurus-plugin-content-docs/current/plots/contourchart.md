---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Контурна диаграма.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности за всяка променлива. Default: `none`.
* __x__ | `string (required)`: променлива по оста x. Default: `none`.
* __y__ | `string (required)`: променлива по оста y. Default: `none`.
* __overlayPoints__ | `boolean`: контролира дали да се наслагват точки за всяко наблюдение. Default: `false`.
* __smoothSpan__ | `number`: обхват на изглаждане. Default: `0.66`.
* __regressionMethod__ | `array<string>`: масив, съдържащ `linear` и/или `smooth`, за наслагване на линейна и/или изгладена регресионна линия. Default: `none`.
* __onSelected__ | `function`: обратна връзка, която се извиква, когато са избрани точки със стойности x, y и избраните точки. Default: `onSelected() {}`.


## Примери

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
