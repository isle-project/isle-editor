---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Компонент для отрисовки R-диаграммы внутри урока ISLE.

## Варианты

* __code__ | `string`: R код для генерации графика. Default: `''`.
* __width__ | `(number|string)`: ширина участка (в px). Default: `600`.
* __height__ | `(number|string)`: высота участка (в px). Default: `'auto'`.
* __draggable__ | `boolean`: контролирует, следует ли перетаскивать участок. Default: `false`.
* __fileType__ | `string`: тип файла сюжета (`png` или `svg`). Default: `'svg'`.
* __libraries__ | `array`: R библиотек, которые должны быть загружены автоматически при выполнении входного `кода`.. Default: `[]`.
* __prependCode__ | `(string|array)`: `строка` или `массив` из фрагментов кода R, которые должны быть подготовлены к коду, хранящемуся в `коде` при оценке. Default: `''`.
* __meta__ | `object`: сюжетная мета-информация. Default: `none`.
* __className__ | `string`: название класса. Default: `''`.
* __onDone__ | `function`: вызов обратного вызова с аргументами `err`, `img` и `body` после создания сюжета.. Default: `onDone() {}`.


## Примеры

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
