---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Lista elementów do przeciągania, które mogą być ponownie uporządkowane przez uczniów.

## Options

* __data__ | `array (required)`: tablica obiektów z klawiszami `id` i `text`. Default: `none`.
* __onChange__ | `function`: wywołanie zwrotne z nowo zamówioną tablicą danych przy każdej zmianie. Default: `onChange(){}`.
* __onInit__ | `function`: funkcja callback wywoływana po zamontowaniu elementu. Default: `onInit(){}`.
* __shuffle__ | `boolean`: kontroluje, czy elementy danych powinny być przemieszane we wstępnym wyświetlaniu. Default: `false`.
* __disabled__ | `boolean`: kontroluje, czy elementy mogą być przeciągane, czy nie. Default: `false`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Examples

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

