---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Компонент за визуализиране на графиката на R в урок на ISLE.

## Опции

* __code__ | `string`: R код за генериране на графиката. Default: `''`.
* __width__ | `(number|string)`: ширина на графиката (в px). Default: `600`.
* __height__ | `(number|string)`: височина на графиката (в px). Default: `'auto'`.
* __draggable__ | `boolean`: контролира дали плотът да може да се плъзга. Default: `false`.
* __fileType__ | `string`: тип на файла на графиката (`png` или `svg`). Default: `'svg'`.
* __libraries__ | `array`: R библиотеки, които трябва да се зареждат автоматично при изпълнение на входния `код`. Default: `[]`.
* __prependCode__ | `(string|array)`: `нишка` или `масив` от фрагменти от код на R, които да се добавят към кода, съхранен в `code`, когато се оценява. Default: `''`.
* __meta__ | `object`: метаинформация за сюжета. Default: `none`.
* __className__ | `string`: име на класа. Default: `''`.
* __onDone__ | `function`: обратна връзка, извикана с аргументи `err`, `img` и `body`, след като е създаден парцел. Default: `onDone() {}`.


## Примери

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
