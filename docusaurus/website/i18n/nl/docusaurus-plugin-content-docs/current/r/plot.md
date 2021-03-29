---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Component voor het weergeven van een R-plot binnen een ISLE-les.

## Opties

* __code__ | `string`: R-code voor het genereren van de plot. Default: `''`.
* __width__ | `(number|string)`: breedte van het perceel (in px). Default: `600`.
* __height__ | `(number|string)`: hoogte van het perceel (in px). Default: `'auto'`.
* __draggable__ | `boolean`: controleert of het perceel versleepbaar moet zijn. Default: `false`.
* __fileType__ | `string`: bestandstype van het perceel (`png` of `svg`). Default: `'svg'`.
* __libraries__ | `array`: R-bibliotheken die automatisch moeten worden geladen wanneer de invoer `code` wordt uitgevoerd. Default: `[]`.
* __prependCode__ | `(string|array)`: Koord' of een 'raster' van R-code-fragmenten die bij de evaluatie van de code in 'code' moeten worden voorgeprogrammeerd.. Default: `''`.
* __meta__ | `object`: plotmeta-informatie. Default: `none`.
* __className__ | `string`: klassennaam. Default: `''`.
* __onDone__ | `function`: callback ingeroepen met `err`, `img` en `body` argumenten zodra een plot is gecreëerd. Default: `onDone() {}`.


## Voorbeelden

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
