---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Ένα μαθησιακό στοιχείο που απεικονίζει τον αντίκτυπο μιας συγχυτικής μεταβλητής κατά την αξιολόγηση μιας αιτιώδους σχέσης μεταξύ δύο μεταβλητών και της τυχαιοποίησης.

## Επιλογές

* __x__ | `(string|node)`: όνομα της επεξηγηματικής μεταβλητής. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: όνομα της μεταβλητής απάντησης. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: όνομα της μεταβλητής που προκαλεί σύγχυση. Default: `'Parental Myopia'`.


## Παραδείγματα

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

