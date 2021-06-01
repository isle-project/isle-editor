---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Luettelo raahattavista elementeistä, joita oppilaat voivat järjestellä uudelleen.

## Vaihtoehdot

* __data__ | `array (required)`: joukko objekteja, joiden avaimet ovat `id` ja `text`.. Default: `none`.
* __onChange__ | `function`: callback, jota kutsutaan uudella järjestetyllä tietomäärällä jokaisen muutoksen yhteydessä.. Default: `onChange(){}`.
* __onInit__ | `function`: takaisinkutsufunktio, joka käynnistetään komponentin asennuksen jälkeen. Default: `onInit(){}`.
* __shuffle__ | `boolean`: ohjaa, sekoitetaanko tietoelementtejä alkuperäisessä näytössä.. Default: `false`.
* __disabled__ | `boolean`: valvoo, voiko elementtejä raahata vai ei. Default: `false`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

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

