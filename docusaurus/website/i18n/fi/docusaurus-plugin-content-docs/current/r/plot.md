---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Komponentti R-plotin esittämiseen ISLE-oppitunnin sisällä.

## Vaihtoehdot

* __code__ | `string`: R-koodi kuvaajan luomiseksi. Default: `''`.
* __width__ | `(number|string)`: kuvaajan leveys (px). Default: `600`.
* __height__ | `(number|string)`: kuvaajan korkeus (px). Default: `'auto'`.
* __draggable__ | `boolean`: ohjaa, onko kartta vedettävissä. Default: `false`.
* __fileType__ | `string`: piirroksen tiedostotyyppi (`png` tai `svg`).. Default: `'svg'`.
* __libraries__ | `array`: R-kirjastot, jotka pitäisi ladata automaattisesti, kun syötetty `koodi` suoritetaan.. Default: `[]`.
* __prependCode__ | `(string|array)`: `string` tai `array` R-koodinpätkiä, jotka liitetään `code`-koodiin tallennetun koodin eteen, kun arvioidaan. Default: `''`.
* __meta__ | `object`: juoni metatiedot. Default: `none`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __onDone__ | `function`: callback, jota kutsutaan argumenteilla `err`, `img` ja `body`, kun plot on luotu.. Default: `onDone() {}`.


## Esimerkkejä

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
