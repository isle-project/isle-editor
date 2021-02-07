---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Un elenco di elementi trascinabili che possono essere riordinati dagli studenti.

## Options

* __data__ | `array (required)`: array di oggetti con tasti `id` e `text`.. Default: `none`.
* __onChange__ | `function`: richiamata con l'array di dati appena ordinato ad ogni modifica. Default: `onChange(){}`.
* __onInit__ | `function`: funzione di richiamo richiamata dopo il montaggio del componente. Default: `onInit(){}`.
* __shuffle__ | `boolean`: controlla se gli elementi dei dati devono essere mescolati nella visualizzazione iniziale. Default: `false`.
* __disabled__ | `boolean`: controlla se gli elementi possono essere trascinati o meno. Default: `false`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


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

