---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Λογιστική παλινδρόμηση.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __y__ | `(string|Factor) (required)`: μεταβλητή αποτελέσματος. Default: `none`.
* __success__ | `any (required)`: κατηγορία επιτυχίας του `y`. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: μία ή περισσότερες μεταβλητές πρόβλεψης. Default: `none`.
* __quantitative__ | `array<string> (required)`: πίνακας μεταβλητών στα "δεδομένα" που είναι "ποσοτικές. Default: `none`.
* __omitMissing__ | `boolean`: ελέγχει αν θα παραλείπονται οι ελλείπουσες τιμές. Default: `false`.
* __intercept__ | `boolean`: ελέγχει αν θα προσαρμοστεί ένα μοντέλο με όρο διακοπής. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Παραδείγματα

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

