---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Component for rendering an R plot inside an ISLE lesson.

## Options

* __code__ | `string`: R code to generate the plot. Default: `''`.
* __width__ | `(number|string)`: width of the plot (in px). Default: `600`.
* __height__ | `(number|string)`: height of the plot (in px). Default: `'auto'`.
* __draggable__ | `boolean`: controls whether the plot should be draggable. Default: `false`.
* __fileType__ | `string`: file type of the plot (`png` or `svg`). Default: `'svg'`.
* __libraries__ | `array`: R libraries that should be loaded automatically when the input `code` is executed. Default: `[]`.
* __prependCode__ | `(string|array)`: `string` or an `array` of R code snippets to be prepended to the code stored in `code` when evaluating. Default: `''`.
* __meta__ | `object`: plot meta-information. Default: `none`.
* __className__ | `string`: class name. Default: `''`.
* __onDone__ | `function`: callback invoked with `err`, `img` and `body` arguments once a plot is created. Default: `onDone() {}`.


## Examples

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
