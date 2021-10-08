---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

Ένα στοιχείο ISLE για την εγγραφή ήχου, οθόνης και βίντεο.

## Επιλογές

* __audio__ | `boolean`: υποδεικνύει αν πρέπει να καταγραφεί ήχος. Default: `false`.
* __camera__ | `boolean`: υποδεικνύει αν η κάμερα πρέπει να καταγράφεται. Default: `false`.
* __screen__ | `boolean`: υποδεικνύει αν η οθόνη πρέπει να καταγραφεί. Default: `false`.
* __autostart__ | `boolean`: υποδεικνύει αν η εγγραφή πρέπει να αρχίσει αμέσως. Default: `false`.
* __downloadable__ | `boolean`: υποδεικνύει αν οι χρήστες θα πρέπει να μπορούν να κατεβάζουν την εγγραφή. Default: `false`.
* __uploadable__ | `boolean`: υποδεικνύει αν οι χρήστες θα πρέπει να μπορούν να μεταφορτώνουν την εγγραφή στον διακομιστή. Default: `false`.
* __bitsPerSecond__ | `number`: bits ανά δευτερόλεπτο. Default: `1280000`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



