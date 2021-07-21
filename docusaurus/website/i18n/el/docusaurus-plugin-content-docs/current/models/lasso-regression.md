---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

Παλινδρόμηση LASSO.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __y__ | `string (required)`: μεταβλητή αποτελέσματος. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: μία ή περισσότερες μεταβλητές πρόβλεψης. Default: `none`.
* __quantitative__ | `array<string> (required)`: πίνακας μεταβλητών στα "δεδομένα" που είναι "ποσοτικές. Default: `none`.
* __lambda__ | `number`: παράμετρος κανονικοποίησης. Default: `0.001`.
* __intercept__ | `boolean`: ελέγχει αν θα προσαρμοστεί ένα μοντέλο με όρο διακοπής. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `onPredict() {}`.


## Παραδείγματα

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

