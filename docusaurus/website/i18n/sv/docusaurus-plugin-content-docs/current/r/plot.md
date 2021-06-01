---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Komponent för att visa en R-ritning i en ISLE-lektion.

## Alternativ

* __code__ | `string`: R-kod för att generera diagrammet. Default: `''`.
* __width__ | `(number|string)`: Plottets bredd (i px). Default: `600`.
* __height__ | `(number|string)`: Plottets höjd (i px). Default: `'auto'`.
* __draggable__ | `boolean`: kontrollerar om plottet ska kunna dras.. Default: `false`.
* __fileType__ | `string`: filtyp för plottet (`png` eller `svg`). Default: `'svg'`.
* __libraries__ | `array`: R-bibliotek som ska laddas automatiskt när inmatningskoden körs.. Default: `[]`.
* __prependCode__ | `(string|array)`: `sträng` eller ett `array` med R-kodutdrag som ska läggas till den kod som lagras i `code` när den utvärderas.. Default: `''`.
* __meta__ | `object`: utforma metainformation.. Default: `none`.
* __className__ | `string`: klassens namn. Default: `''`.
* __onDone__ | `function`: callback som anropas med argumenten `err`, `img` och `body` när en plot har skapats. Default: `onDone() {}`.


## Exempel

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
