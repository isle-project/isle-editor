---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

En liste over elementer, der kan trækkes, og som eleverne kan ordne på ny.

## Indstillinger

* __data__ | `array (required)`: array af objekter med nøglerne `id` og `text`. Default: `none`.
* __onChange__ | `function`: callback påkaldt med nyordnet datamatrix ved hver ændring. Default: `onChange(){}`.
* __onInit__ | `function`: callback-funktion, der påkaldes efter montering af komponent. Default: `onInit(){}`.
* __shuffle__ | `boolean`: styrer, om dataelementer skal blandes i den første visning. Default: `false`.
* __disabled__ | `boolean`: kontrollerer, om elementer kan trækkes eller ej. Default: `false`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

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

