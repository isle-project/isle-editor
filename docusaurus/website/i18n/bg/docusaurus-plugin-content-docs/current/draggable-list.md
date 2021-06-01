---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Списък с елементи, които могат да бъдат премествани с влачене и които могат да бъдат пренареждани от учениците.

## Опции

* __data__ | `array (required)`: масив от обекти с ключове `id` и `text`. Default: `none`.
* __onChange__ | `function`: обратно извикване с новоподреден масив от данни при всяка промяна. Default: `onChange(){}`.
* __onInit__ | `function`: функция за обратна връзка, извикана след монтиране на компонент. Default: `onInit(){}`.
* __shuffle__ | `boolean`: контролира дали елементите на данните трябва да се разбъркват при първоначалното показване.. Default: `false`.
* __disabled__ | `boolean`: контролира дали елементите могат да бъдат плъзгани или не. Default: `false`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

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

