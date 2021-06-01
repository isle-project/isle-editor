---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Zoznam prvkov, ktoré sa dajú ťahať a ktoré môžu študenti preusporiadať.

## Možnosti

* __data__ | `array (required)`: pole objektov s kľúčmi `id` a `text`. Default: `none`.
* __onChange__ | `function`: spätné volanie vyvolané s novo usporiadaným dátovým poľom pri každej zmene. Default: `onChange(){}`.
* __onInit__ | `function`: spätné volanie vyvolané po pripojení komponentu. Default: `onInit(){}`.
* __shuffle__ | `boolean`: kontroluje, či sa majú dátové prvky pri počiatočnom zobrazení premiešať.. Default: `false`.
* __disabled__ | `boolean`: kontroluje, či je možné prvky ťahať alebo nie. Default: `false`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

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

