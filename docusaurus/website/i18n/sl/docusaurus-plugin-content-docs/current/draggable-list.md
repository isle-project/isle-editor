---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Seznam elementov, ki jih je mogoče povleči in jih lahko učenci prerazporedijo.

## Možnosti

* __data__ | `array (required)`: polje objektov s ključema `id` in `text`. Default: `none`.
* __onChange__ | `function`: povratni klic, sprožen z novo urejenim podatkovnim poljem ob vsaki spremembi. Default: `onChange(){}`.
* __onInit__ | `function`: povratna funkcija, ki se sproži po namestitvi komponente. Default: `onInit(){}`.
* __shuffle__ | `boolean`: nadzoruje, ali naj se podatkovni elementi pri začetnem prikazu premešajo.. Default: `false`.
* __disabled__ | `boolean`: nadzoruje, ali je elemente mogoče povleči ali ne.. Default: `false`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

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

