---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Loetelu lohistatavatest elementidest, mida õpilased saavad ümber järjestada.

## Valikud

* __data__ | `array (required)`: objektide massiivi võtmetega "id" ja "tekst".. Default: `none`.
* __onChange__ | `function`: callback, mida kutsutakse üles uue järjestatud andmemassiiviga iga muudatuse korral. Default: `onChange(){}`.
* __onInit__ | `function`: tagasilöögifunktsioon, mis käivitub pärast komponendi paigaldamist. Default: `onInit(){}`.
* __shuffle__ | `boolean`: kontrollib, kas andmeelemendid tuleks algsel kuvamisel segada.. Default: `false`.
* __disabled__ | `boolean`: kontrollib, kas elemente saab lohistada või mitte. Default: `false`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

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

