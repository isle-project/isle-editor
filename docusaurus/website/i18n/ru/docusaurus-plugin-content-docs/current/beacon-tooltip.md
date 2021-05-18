---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Компонент, помещающий маячок в урок, либо самостоятельно, либо прикрепленный к "мишени". При наведении курсора или нажатии на маяк отображается всплывающая подсказка.

## Варианты

* __title__ | `(string|node)`: название, которое будет отображаться в верхней части подсказки. Default: `none`.
* __content__ | `(string|node)`: контекстное окно. Default: `'`content` comes here...'`.
* __event__ | `string`: если установлено в ``клик`, всплывающая подсказка включается при нажатии на маячок; если установлено в `навешивание`, всплывающая подсказка включается при наведении курсора. Default: `'click'`.
* __placement__ | `string`: размещение подсказки относительно `цели` (либо `top`, `top-start`, `top-end`, `bottom`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, или `center`). Default: `'left'`.
* __target__ | `string`: селектор классов или идентификаторов элементов для прикрепления всплывающей подсказки к. Default: `''`.
* __offset__ | `number`: расстояние между всплывающей подсказкой и `мишенью` в пикселях. Default: `15`.
* __onChange__ | `function`: обратный вызов при изменении состояния всплывающей подсказки. Получает два аргумента: `действие` (`открыть` или `закрыть`) и переданный `подсказка`. Default: `onChange() {}`.


## Примеры

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



