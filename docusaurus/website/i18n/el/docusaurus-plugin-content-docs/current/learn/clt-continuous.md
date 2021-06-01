---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Ένα μαθησιακό στοιχείο που απεικονίζει το Κεντρικό Οριακό Θεώρημα (ΚΟΘ) για μια επιλεγμένη συνεχή κατανομή.

## Επιλογές

* __distributions__ | `array<string>`: στατιστικές κατανομές προς επιλογή ("ομοιόμορφη", "εκθετική" ή/και "κανονική"). Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: πίνακας αριθμών ή μεμονωμένοι αριθμοί που δηλώνουν τα μεγέθη του δείγματος που μπορούν να αντληθούν. Default: `25`.
* __hideFormulas__ | `boolean`: ελέγχει αν θα αποκρύπτονται οι τύποι στο κείμενο του στοιχείου. Default: `false`.


## Παραδείγματα

```jsx live
<LearnContinuousCLT />
```

