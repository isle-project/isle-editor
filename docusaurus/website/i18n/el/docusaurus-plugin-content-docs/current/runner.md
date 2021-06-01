---
id: runner 
title: Runner
sidebar_label: Runner
---

Το στοιχείο runner θα εκτελέσει μια παρεχόμενη συνάρτηση είτε μία φορά είτε σε ένα συγκεκριμένο χρονικό διάστημα.

## Επιλογές

* __active__ | `boolean`: ελέγχει αν ο δρομέας πρέπει να είναι ενεργός. Κατά την ενεργοποίηση, η συνάρτηση `onEvaluate` καλείται στο δεδομένο διάστημα (ή μία φορά).. Default: `true`.
* __interval__ | `number`: αριθμός χιλιοστών του δευτερολέπτου μεταξύ των επικλήσεων του "onEvaluate". Εάν δεν έχει οριστεί διάστημα, η συνάρτηση καλείται μόνο μία φορά. Default: `none`.
* __onEvaluate__ | `function`: λειτουργία που θα κληθεί. Default: `onEvaluate() {}`.


## Παραδείγματα

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



