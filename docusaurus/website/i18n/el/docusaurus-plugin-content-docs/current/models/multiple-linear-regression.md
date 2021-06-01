---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Πολλαπλή γραμμική παλινδρόμηση.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __y__ | `string (required)`: μεταβλητή αποτελέσματος. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: μία ή περισσότερες μεταβλητές πρόβλεψης. Default: `none`.
* __quantitative__ | `array<string> (required)`: πίνακας μεταβλητών στα "δεδομένα" που είναι "ποσοτικές. Default: `none`.
* __omitMissing__ | `boolean`: ελέγχει αν θα παραλείπονται οι ελλείπουσες τιμές. Default: `false`.
* __intercept__ | `boolean`: ελέγχει αν θα προσαρμοστεί ένα μοντέλο με όρο διακοπής. Default: `true`.
* __onDiagnostics__ | `function`: callback που καλείται με διαγνωστικά οικόπεδα. Default: `none`.
* __onPredict__ | `function`: callback που καλείται με τις προβλέψεις και τα κατάλοιπα μετά την προσαρμογή του μοντέλου. Default: `none`.


## Παραδείγματα

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

