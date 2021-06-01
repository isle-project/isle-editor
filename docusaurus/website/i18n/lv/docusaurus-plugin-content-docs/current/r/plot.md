---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Sastāvdaļa, lai atveidotu R rasējumu ISLE nodarbībā.

## Iespējas

* __code__ | `string`: R kods gabala ģenerēšanai. Default: `''`.
* __width__ | `(number|string)`: laukuma platums (px). Default: `600`.
* __height__ | `(number|string)`: laukuma augstums (px). Default: `'auto'`.
* __draggable__ | `boolean`: kontrolē, vai zemes gabalu var vilkt. Default: `false`.
* __fileType__ | `string`: attēla faila tips (`png` vai `svg`).. Default: `'svg'`.
* __libraries__ | `array`: R bibliotēkas, kas jāielādē automātiski, kad tiek izpildīts ievades `kods`.. Default: `[]`.
* __prependCode__ | `(string|array)`: `virkne` vai R koda fragmentu `maseja`, kas tiks pievienota kodam, kas glabājas `code`, kad tiks novērtēts.. Default: `''`.
* __meta__ | `object`: zemes gabala metainformācija. Default: `none`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __onDone__ | `function`: atgriezeniskais zvans, kas tiek izsaukts ar `err`, `img` un `body` argumentiem, tiklīdz ir izveidots zemes gabals.. Default: `onDone() {}`.


## Piemēri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Draggable', value: 'draggable' },
        { label: 'Custom Dimensions', value: 'customDimensions' },
        { label: 'Using Libraries', value: 'usingLibraries' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" />
```

</TabItem>

<TabItem value="draggable" >

```jsx live
<RPlot draggable code="hist( c(20,50,40,70,40,30) )" />
```

</TabItem>

<TabItem value="customDimensions" >

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" width="900px" />
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RPlot 
    libraries={[ 'ggplot2' ]}
    code="qplot(mpg, wt, data = mtcars)" 
/>
```

</TabItem>

</Tabs>
