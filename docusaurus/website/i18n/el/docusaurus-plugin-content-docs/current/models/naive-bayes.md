---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes υποθέτοντας ότι οι προγνωστικοί δείκτες δεδομένης της συμμετοχής στην κλάση ακολουθούν κανονική κατανομή.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __y__ | `(string|Factor) (required)`: μεταβλητή αποτελέσματος. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: μία ή περισσότερες μεταβλητές πρόβλεψης. Default: `none`.
* __quantitative__ | `array<string> (required)`: πίνακας μεταβλητών στα "δεδομένα" που είναι "ποσοτικές. Default: `none`.
* __omitMissing__ | `boolean`: ελέγχει αν θα παραλείπονται οι ελλείπουσες τιμές. Default: `false`.
* __onPredict__ | `function`: callback που καλείται με τις προβλέψεις και τα κατάλοιπα μετά την προσαρμογή του μοντέλου. Default: `none`.


## Παραδείγματα

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

