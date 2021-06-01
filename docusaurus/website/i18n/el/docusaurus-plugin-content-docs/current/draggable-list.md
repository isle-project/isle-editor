---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Μια λίστα με στοιχεία που μπορούν να μετακινηθούν και να αναδιαταχθούν από τους μαθητές.

## Επιλογές

* __data__ | `array (required)`: πίνακας αντικειμένων με κλειδιά `id` και `text`. Default: `none`.
* __onChange__ | `function`: callback που καλείται με τον πρόσφατα διατεταγμένο πίνακα δεδομένων σε κάθε αλλαγή. Default: `onChange(){}`.
* __onInit__ | `function`: συνάρτηση επανάκλησης που καλείται μετά την τοποθέτηση του εξαρτήματος. Default: `onInit(){}`.
* __shuffle__ | `boolean`: ελέγχει αν τα στοιχεία δεδομένων θα πρέπει να ανακατεύονται κατά την αρχική εμφάνιση. Default: `false`.
* __disabled__ | `boolean`: ελέγχει αν τα στοιχεία μπορούν να συρθούν ή όχι. Default: `false`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

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

