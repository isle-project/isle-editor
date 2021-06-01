---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Μια συνιστώσα εκμάθησης σχετικά με τους ελέγχους υποθέσεων για τον μέσο όρο ενός πληθυσμού.

## Επιλογές

* __types__ | `array<string>`: τον τύπο (ή τους τύπους) του τεστ (`Ένα δείγμα`, `Δύο δείγματα`) που πρέπει να εκθέσει το widget. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: τη δοκιμή(-ες) που εκτίθεται(-ονται) από το widget. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: εμφανίζει πάντα τη μηδενική υπόθεση ως μία μόνο τιμή. Default: `false`.
* __feedback__ | `boolean`: ελέγχει αν θα εμφανίζονται κουμπιά ανάδρασης. Default: `false`.
* __pValue__ | `string`: προσαρμοσμένη ετικέτα για την τιμή p-value (θα πρέπει να είναι μια συμβολοσειρά εξίσωσης LaTeX). Default: `none`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

```jsx live
<LearnMeanTest />
```

