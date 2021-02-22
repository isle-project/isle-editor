---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Гистограмма.

## Options

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `string (required)`: переменная для отображения. Default: `none`.
* __group__ | `string`: переменная группировки. Default: `none`.
* __groupMode__ | `string`: накладывать ли сгруппированные гистограммы друг на друга (`Оверлей`) или на отдельные графики рядом друг с другом (`Фейсы`).. Default: `'Overlay'`.
* __displayDensity__ | `boolean`: управляет отображением значений плотности вместо подсчетов по оси Y. Default: `false`.
* __densityType__ | `string`: при отображении плотностей можно либо наложить параметрическое распределение (`нормальное`, `нормальное` или `экспоненциальное`), либо непараметрическую ядерную оценку плотности (`данные-управляемые`).. Default: `none`.
* __bandwidthAdjust__ | `number`: undefined. Default: `1`.
* __binStrategy__ | `string`: стратегия бининга (`Автоматический`, `Выбор` мусорного контейнера`, или `Установка ширины мусорного контейнера`).. Default: `'Automatic'`.
* __nBins__ | `number`: нестандартное количество бункеров. Default: `none`.
* __nCols__ | `number`: количество столбцов при отображении фасетированной сгруппированной гистограммы. Default: `none`.
* __xBins__ | `{start,size,end}`: объект со свойствами `старт`, `размер` и `конец`, регулирующими поведение биннинга.. Default: `{}`.


## Examples

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```

