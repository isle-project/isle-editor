---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

En lista med dragbara element som eleverna kan ordna om.

## Alternativ

* __data__ | `array (required)`: array av objekt med nycklarna `id` och `text`.. Default: `none`.
* __onChange__ | `function`: callback som anropas med en nyordnad datamatris vid varje ändring. Default: `onChange(){}`.
* __onInit__ | `function`: callback-funktion som anropas efter montering av komponenten. Default: `onInit(){}`.
* __shuffle__ | `boolean`: kontrollerar om dataelement ska blandas vid den första visningen.. Default: `false`.
* __disabled__ | `boolean`: kontrollerar om element kan dras eller inte. Default: `false`.
* __className__ | `string`: Klassnamn.. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

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

