---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Komponenta za prikazovanje ploskve R znotraj lekcije ISLE.

## Možnosti

* __code__ | `string`: Koda R za generiranje grafikona. Default: `''`.
* __width__ | `(number|string)`: širina ploskve (v px). Default: `600`.
* __height__ | `(number|string)`: višina ploskve (v px). Default: `'auto'`.
* __draggable__ | `boolean`: nadzoruje, ali naj bo graf mogoče povleči.. Default: `false`.
* __fileType__ | `string`: tip datoteke za graf (`png` ali `svg`). Default: `'svg'`.
* __libraries__ | `array`: Knjižnice R, ki naj se samodejno naložijo ob izvajanju vhodne `kode`.. Default: `[]`.
* __prependCode__ | `(string|array)`: `vrvica` ali `mrežica` odlomkov kode R, ki se pri vrednotenju doda kodi, shranjeni v `koda`.. Default: `''`.
* __meta__ | `object`: metainformacije o ploskvi. Default: `none`.
* __className__ | `string`: ime razreda. Default: `''`.
* __onDone__ | `function`: povratni klic, ki se sproži z argumenti `err`, `img` in `body`, ko je parcela ustvarjena. Default: `onDone() {}`.


## Primeri

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
