---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Een lijst met versleepbare elementen die door de leerlingen opnieuw kunnen worden geordend.

## Opties

* __data__ | `array (required)`: array van objecten met `id` en `tekst` toetsen. Default: `none`.
* __onChange__ | `function`: callback ingeroepen met nieuw bestelde data-array bij elke wijziging. Default: `onChange(){}`.
* __onInit__ | `function`: terugbelfunctie ingeroepen na montage van de component. Default: `onInit(){}`.
* __shuffle__ | `boolean`: controleert of de gegevenselementen in de initiële weergave moeten worden geschud. Default: `false`.
* __disabled__ | `boolean`: regelt of elementen al dan niet kunnen worden versleept. Default: `false`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

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

