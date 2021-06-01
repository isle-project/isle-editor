---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Komponens egy R-diagram megjelenítéséhez egy ISLE-leckén belül.

## Opciók

* __code__ | `string`: R kód a grafikon létrehozásához. Default: `''`.
* __width__ | `(number|string)`: a plot szélessége (px-ben). Default: `600`.
* __height__ | `(number|string)`: a plot magassága (px-ben). Default: `'auto'`.
* __draggable__ | `boolean`: szabályozza, hogy a plot húzható legyen-e. Default: `false`.
* __fileType__ | `string`: a plot fájltípusa (`png` vagy `svg`). Default: `'svg'`.
* __libraries__ | `array`: R könyvtárak, amelyeket automatikusan be kell tölteni, amikor a bemeneti "kód" végrehajtásra kerül.. Default: `[]`.
* __prependCode__ | `(string|array)`: `string` vagy egy `array` R kódrészletekből, amelyeket a `code`-ban tárolt kódhoz kell csatolni a kiértékeléskor.. Default: `''`.
* __meta__ | `object`: metainformációk. Default: `none`.
* __className__ | `string`: osztály neve. Default: `''`.
* __onDone__ | `function`: callback, amelyet az `err`, `img` és `body` argumentumokkal hívnak meg, ha a plot létrejön.. Default: `onDone() {}`.


## Példák

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
