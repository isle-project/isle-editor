---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Список перетаскиваемых элементов, которые могут быть переупорядочены учениками.

## Варианты

* __data__ | `array (required)`: массив объектов с `id` и `text` ключами. Default: `none`.
* __onChange__ | `function`: обратный вызов с новым упорядоченным массивом данных при каждом изменении. Default: `onChange(){}`.
* __onInit__ | `function`: функция обратного вызова, вызываемая после установки компонента. Default: `onInit(){}`.
* __shuffle__ | `boolean`: управляет тем, должны ли элементы данных быть перетасованы на начальном дисплее. Default: `false`.
* __disabled__ | `boolean`: контролирует, можно ли перетаскивать элементы. Default: `false`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

```jsx live
<DraggableList
    data={[
        { id: 0, text: "Compact" },
        { id: 1, text: "Large" },
        { id: 2, text: "Midsize" },
        { id: 3, text: "Small" }
    ]}
/>
```

