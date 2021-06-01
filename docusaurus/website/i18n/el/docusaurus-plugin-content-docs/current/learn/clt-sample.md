---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Μια συνιστώσα μάθησης που απεικονίζει το Κεντρικό Οριακό Θεώρημα (CLT) κατά τη δειγματοληψία από ένα σύνολο δεδομένων που παρέχεται.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο δεδομένων με κλειδιά που αντιστοιχούν σε ονόματα μεταβλητών και τιμές που περιέχουν τις τιμές των αντίστοιχων μεταβλητών. Default: `none`.
* __hidePopulationStdev__ | `boolean`: απόκρυψη της εμφάνισης της τυπικής απόκλισης του πληθυσμού. Default: `false`.
* __samples__ | `(array<number>|number)`: πίνακας αριθμών ή μεμονωμένοι αριθμοί που δηλώνουν τα μεγέθη του δείγματος που μπορούν να αντληθούν. Default: `25`.
* __populationProbabilities__ | `boolean`: αν θα εμφανίζει εξισώσεις για τον υπολογισμό των πιθανοτήτων του πληθυσμού. Default: `false`.
* __quantiles__ | `boolean`: αν θα εμφανίσετε το εργαλείο για τον υπολογισμό οποιωνδήποτε κβαντιλίων. Default: `false`.
* __variables__ | `array (required)`: ονόματα μεταβλητών που μπορούν να ληφθούν από δείγμα. Default: `none`.


## Παραδείγματα

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

