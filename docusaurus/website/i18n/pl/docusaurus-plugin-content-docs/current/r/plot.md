---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Komponent do renderowania wykresu R wewnątrz lekcji ISLE.

## Opcje

* __code__ | `string`: Kod R do wygenerowania wykresu. Default: `''`.
* __width__ | `(number|string)`: szerokość działki (w px). Default: `600`.
* __height__ | `(number|string)`: wysokość działki (w px). Default: `'auto'`.
* __draggable__ | `boolean`: kontroluje, czy działka powinna być wleczona. Default: `false`.
* __fileType__ | `string`: typ pliku działki (`png` lub `svg`). Default: `'svg'`.
* __libraries__ | `array`: Biblioteki R, które powinny być ładowane automatycznie po wykonaniu wejścia `kodu`. Default: `[]`.
* __prependCode__ | `(string|array)`: `sznurek` lub `szereg` fragmentów kodu R, które mają być zawieszone na kodzie przechowywanym w `kodu` podczas oceny. Default: `''`.
* __meta__ | `object`: fabuła meta-informacja. Default: `none`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __onDone__ | `function`: wywołanie zwrotne z `err`, `img` i `body` argumentami po stworzeniu fabuły. Default: `onDone() {}`.


## Przykłady

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
