---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Velkamo elementu saraksts, ko skolēni var pārkārtot.

## Iespējas

* __data__ | `array (required)`: objektu masīvs ar `id` un `text` atslēgām. Default: `none`.
* __onChange__ | `function`: atgriezeniskais izsaukums, kas tiek izsaukts ar jaunu sakārtotu datu masīvu par katru izmaiņu.. Default: `onChange(){}`.
* __onInit__ | `function`: atgriezeniskā zvana funkcija, kas tiek izsaukta pēc komponenta montāžas. Default: `onInit(){}`.
* __shuffle__ | `boolean`: kontrolē, vai datu elementi sākotnējā attēlojumā ir jāsajauc.. Default: `false`.
* __disabled__ | `boolean`: kontrolē, vai elementus var vilkt vai nē. Default: `false`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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

