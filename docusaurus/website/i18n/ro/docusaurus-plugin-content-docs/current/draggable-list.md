---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

O listă de elemente glisabile care pot fi reordonate de către elevi.

## Opțiuni

* __data__ | `array (required)`: matrice de obiecte cu cheile `id` și `text`.. Default: `none`.
* __onChange__ | `function`: callback invocat cu noul tablou de date ordonat la fiecare modificare. Default: `onChange(){}`.
* __onInit__ | `function`: funcția de callback invocată după montarea componentei. Default: `onInit(){}`.
* __shuffle__ | `boolean`: controlează dacă elementele de date trebuie să fie amestecate în afișarea inițială. Default: `false`.
* __disabled__ | `boolean`: controlează dacă elementele pot fi trasate sau nu. Default: `false`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

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

