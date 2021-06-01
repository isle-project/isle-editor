---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Obrisni diagram.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti za vsako spremenljivko. Default: `none`.
* __x__ | `string (required)`: spremenljivka na osi x. Default: `none`.
* __y__ | `string (required)`: spremenljivka na osi y. Default: `none`.
* __overlayPoints__ | `boolean`: nadzoruje, ali naj se prekrijejo točke za vsako opazovanje.. Default: `false`.
* __smoothSpan__ | `number`: razpon glajenja. Default: `0.66`.
* __regressionMethod__ | `array<string>`: polje, ki vsebuje `linearno` in/ali `gladko` za prekrivanje linearne in/ali glajene regresijske linije. Default: `none`.
* __onSelected__ | `function`: povratni klic, ki se sproži, ko so izbrane točke z vrednostmi x, y in izbrane točke. Default: `onSelected() {}`.


## Primeri

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
