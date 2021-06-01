---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Húzható elemek listája, amelyeket a tanulók átrendezhetnek.

## Opciók

* __data__ | `array (required)`: az "azonosító" és "szöveg" kulcsokkal rendelkező objektumok tömbje. Default: `none`.
* __onChange__ | `function`: callback hívás az újonnan rendezett adattömbökkel minden egyes változáskor. Default: `onChange(){}`.
* __onInit__ | `function`: callback függvény, amelyet az alkatrész felszerelése után hívnak meg. Default: `onInit(){}`.
* __shuffle__ | `boolean`: szabályozza, hogy az adatelemek keveredjenek-e a kezdeti megjelenítéskor. Default: `false`.
* __disabled__ | `boolean`: szabályozza, hogy az elemeket lehet-e húzni vagy sem. Default: `false`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

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

