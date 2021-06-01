---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Το στοιχείο appear θα κάνει όλα τα παιδιά του να γίνουν ορατά μετά από ένα καθορισμένο χρονικό διάστημα.

## Επιλογές

* __active__ | `boolean`: ελέγχει αν ο μετρητής πρέπει να είναι ενεργός. Default: `false`.
* __delay__ | `number`: αριθμός χιλιοστών του δευτερολέπτου πριν από την εμφάνιση του στοιχείου. Default: `1000`.


## Παραδείγματα

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



