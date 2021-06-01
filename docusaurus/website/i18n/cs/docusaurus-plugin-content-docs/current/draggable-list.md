---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Seznam prvků, které lze přetahovat a které mohou studenti řadit.

## Možnosti

* __data__ | `array (required)`: pole objektů s klíči `id` a `text`. Default: `none`.
* __onChange__ | `function`: zpětné volání vyvolané s nově uspořádaným datovým polem při každé změně. Default: `onChange(){}`.
* __onInit__ | `function`: funkce zpětného volání vyvolaná po připojení komponenty. Default: `onInit(){}`.
* __shuffle__ | `boolean`: řídí, zda mají být datové prvky při počátečním zobrazení promíchány.. Default: `false`.
* __disabled__ | `boolean`: řídí, zda lze prvky přetahovat, nebo ne. Default: `false`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

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

