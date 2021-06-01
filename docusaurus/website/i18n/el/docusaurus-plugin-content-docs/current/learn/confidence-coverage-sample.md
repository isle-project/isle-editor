---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

Μια συνιστώσα μάθησης που απεικονίζει το Κεντρικό Οριακό Θεώρημα (CLT) κατά τη δειγματοληψία από ένα σύνολο δεδομένων που παρέχεται.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο δεδομένων με κλειδιά που αντιστοιχούν σε ονόματα μεταβλητών και τιμές που περιέχουν τις τιμές των αντίστοιχων μεταβλητών. Default: `none`.
* __samples__ | `(array<number>|number)`: πίνακας αριθμών ή μεμονωμένοι αριθμοί που δηλώνουν τα μεγέθη του δείγματος που μπορούν να αντληθούν. Default: `25`.
* __variables__ | `array (required)`: ονόματα μεταβλητών που μπορούν να ληφθούν από δείγμα. Default: `none`.


## Παραδείγματα

```jsx live
<LearnConfidenceCoverageSample 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

