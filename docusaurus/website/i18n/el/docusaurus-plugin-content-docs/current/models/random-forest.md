---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Τυχαία δάση.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __y__ | `(string|Factor) (required)`: μεταβλητή αποτελέσματος. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: μία ή περισσότερες μεταβλητές πρόβλεψης. Default: `none`.
* __type__ | `string`: επί του παρόντος υποστηρίζεται μόνο η "ταξινόμηση" για κατηγορικές απαντήσεις. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: πίνακας μεταβλητών στα "δεδομένα" που είναι "ποσοτικές. Default: `none`.
* __nTrees__ | `number`: αριθμός δέντρων. Default: `50`.
* __nTry__ | `number`: αριθμός προβλεπτικών παραγόντων προς έλεγχο σε κάθε διάσπαση. Default: `1`.
* __impurityMeasure__ | `string`: μέτρο ακαθαρσίας (`gini` ή `εντροπία`). Default: `'gini'`.
* __scoreThreshold__ | `number`: κατώτατο όριο βαθμολογίας για διαχωρισμό. Default: `0.01`.
* __maxTreeDepth__ | `number`: μέγιστο βάθος δέντρου. Default: `20`.
* __minItemsCount__ | `number`: ελάχιστος αριθμός παρατηρήσεων στους κόμβους φύλλων. Default: `50`.
* __onPredict__ | `function`: callback που καλείται με το αντικείμενο του μοντέλου όταν κάνετε κλικ στο κουμπί πρόβλεψης. Default: `none`.


## Παραδείγματα

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

