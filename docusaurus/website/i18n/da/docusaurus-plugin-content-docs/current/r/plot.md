---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Komponent til gengivelse af et R-plot i en ISLE-lektion.

## Indstillinger

* __code__ | `string`: R-kode til at generere plottet. Default: `''`.
* __width__ | `(number|string)`: plotets bredde (i px). Default: `600`.
* __height__ | `(number|string)`: plotets højde (i px). Default: `'auto'`.
* __draggable__ | `boolean`: styrer, om plottet skal kunne trækkes. Default: `false`.
* __fileType__ | `string`: plotets filtype (`png` eller `svg`). Default: `'svg'`.
* __libraries__ | `array`: R-biblioteker, der skal indlæses automatisk, når inputkoden udføres. Default: `[]`.
* __prependCode__ | `(string|array)`: `string` eller et `array` af R-kodeuddrag, der skal tilføjes til den kode, der er gemt i `code`, når den evalueres. Default: `''`.
* __meta__ | `object`: plotmetainformationer. Default: `none`.
* __className__ | `string`: klassens navn. Default: `''`.
* __onDone__ | `function`: callback, der påkaldes med `err`, `img` og `body` argumenter, når et plot er oprettet. Default: `onDone() {}`.


## Eksempler

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
