---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Παλινδρόμηση και δέντρα ταξινόμησης.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __y__ | `(string|Factor) (required)`: μεταβλητή αποτελέσματος. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: μία ή περισσότερες μεταβλητές πρόβλεψης. Default: `none`.
* __type__ | `string (required)`: "Ταξινόμηση" για κατηγορικά ή "Παλινδρόμηση" για ποσοτικά αποτελέσματα. Default: `none`.
* __quantitative__ | `array<string> (required)`: πίνακας μεταβλητών στα "δεδομένα" που είναι "ποσοτικές. Default: `none`.
* __impurityMeasure__ | `string`: μέτρο ακαθαρσίας (`gini` ή `εντροπία`). Default: `'gini'`.
* __scoreThreshold__ | `number`: κατώτατο όριο βαθμολογίας για διαχωρισμό. Default: `0.0075`.
* __maxTreeDepth__ | `number`: μέγιστο βάθος δέντρου. Default: `5`.
* __minItemsCount__ | `number`: ελάχιστος αριθμός παρατηρήσεων στους κόμβους φύλλων. Default: `50`.
* __onPredict__ | `function`: callback που καλείται με το αντικείμενο του μοντέλου όταν κάνετε κλικ στο κουμπί πρόβλεψης. Default: `none`.


## Παραδείγματα

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

