---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Απλή γραμμική παλινδρόμηση.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __x__ | `string (required)`: επεξηγηματική μεταβλητή. Default: `none`.
* __y__ | `string (required)`: μεταβλητή απόκρισης. Default: `none`.
* __group__ | `(string|Factor)`: μεταβλητή ομαδοποίησης. Default: `none`.
* __omitMissing__ | `boolean`: ελέγχει αν θα παραλείπονται οι ελλείπουσες τιμές κατά την προσαρμογή του μοντέλου. Default: `false`.
* __onDiagnostics__ | `function`: callback που καλείται με διαγνωστικά οικόπεδα. Default: `none`.
* __onPredict__ | `function`: callback που καλείται με μια συνάρτηση predict για να κάνει προβλέψεις για νέα δεδομένα. Default: `none`.


## Παραδείγματα

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

