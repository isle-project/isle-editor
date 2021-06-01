---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Vilktinų elementų sąrašas, kurį mokiniai gali pertvarkyti.

## Parinktys

* __data__ | `array (required)`: objektų su `id` ir `text` raktais masyvas. Default: `none`.
* __onChange__ | `function`: grįžtamasis skambutis su naujai sutvarkytu duomenų masyvu, iškviečiamas kiekvieno pakeitimo metu.. Default: `onChange(){}`.
* __onInit__ | `function`: grįžtamojo ryšio funkcija, iškviečiama sumontavus komponentą. Default: `onInit(){}`.
* __shuffle__ | `boolean`: kontroliuoja, ar pradinio rodymo metu duomenų elementai turėtų būti permaišyti.. Default: `false`.
* __disabled__ | `boolean`: kontroliuoja, ar elementus galima vilkti, ar ne.. Default: `false`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

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

