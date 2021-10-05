---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Гистограмма.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `string (required)`: переменная для отображения. Default: `none`.
* __group__ | `(string|Factor)`: переменная группировки. Default: `none`.
* __title__ | `string`: название гистограммы. Default: `none`.
* __groupMode__ | `string`: накладывать ли сгруппированные гистограммы друг на друга (`Оверлей`) или на отдельные графики рядом друг с другом (`Фейсы`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: управляет отображением значений плотности вместо подсчетов по оси Y. Default: `false`.
* __densityType__ | `string`: при отображении плотностей можно либо наложить параметрическое распределение (`нормальное`, `нормальное` или `экспоненциальное`), либо непараметрическую ядерную оценку плотности (`данные-управляемые`). Default: `none`.
* __densityParams__ | `array<number>`: параметры распределения для плотности, если используется параметрическое распределение ([mu, sigma] для нормального распределения, [a, b] для равномерного распределения, [lambda] для экспоненциального распределения). Default: `[]`.
* __bandwidthAdjust__ | `number`: ручная настройка пропускной способности ядра плотности (применима только в том случае, если `densityType` установлен в `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: стратегия бининга (`Автоматический`, `Выбор` мусорного контейнера`, или `Установка ширины мусорного контейнера`). Default: `'Automatic'`.
* __nBins__ | `number`: нестандартное количество бункеров. Default: `none`.
* __nCols__ | `number`: количество столбцов при отображении фасетированной сгруппированной гистограммы. Default: `none`.
* __xBins__ | `{start,size,end}`: объект со свойствами `старт`, `размер` и `конец`, регулирующими поведение биннинга. Default: `{}`.
* __sameXRange__ | `boolean`: если true, то диапазон по оси x для каждой грани будет таким же, как и общая гистограмма. Default: `false`.
* __sameYRange__ | `boolean`: если true, диапазон по оси y для каждой грани будет таким же, как и общая гистограмма. Default: `false`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Facetted Plot', value: 'groupModeFactes' },
        { label: 'Display Density', value: 'displayDensity' },
        { label: 'No of Bins', value: 'noBins' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
/>
```

</TabItem>

<TabItem value="groupModeFactes">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    nCols={2}
    groupMode="Facets"
/>
```

</TabItem>

<TabItem value="displayDensity">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    displayDensity 
    densityType="Uniform"
/>
```

</TabItem>

<TabItem value="noBins">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    binStrategy="Select # of bins"
    nBins={90}
/>
```

</TabItem>

</Tabs>
