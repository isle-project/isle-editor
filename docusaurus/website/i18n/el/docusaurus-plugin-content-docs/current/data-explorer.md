---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Αυτό το στοιχείο χρησιμοποιείται από τους μαθητές για να συνοψίζουν εν συντομία τα δεδομένα που παρουσιάζονται και να εκτελούν διάφορες στατιστικές δοκιμές.

## Επιλογές

* __categorical__ | `array`: πίνακας συμβολοσειρών που υποδεικνύει το όνομα κάθε κατηγορικής μεταβλητής. Default: `[]`.
* __quantitative__ | `array`: πίνακας συμβολοσειρών που υποδεικνύει το όνομα κάθε ποσοτικής μεταβλητής. Default: `[]`.
* __data__ | `object`: αντικείμενο δεδομένων ή συστοιχία που θα προβληθεί. Εάν πρόκειται για αντικείμενο, τα κλειδιά αντιστοιχούν στις τιμές των στηλών, ενώ ένας πίνακας θα περιμένει έναν πίνακα αντικειμένων με ένα ονομαστικό πεδίο που αντιστοιχεί σε κάθε στήλη. Αν θέλετε να επιτρέψετε στους μαθητές να εισάγουν ένα αρχείο `.csv`, ορίστε την επιλογή `data` σε `false`.. Default: `{}`.
* __dataInfo__ | `object`: αντικείμενο που περιέχει τα κλειδιά \'name\', του οποίου η τιμή είναι μια συμβολοσειρά, \'info\', του οποίου η τιμή είναι ένας πίνακας συμβολοσειρών στον οποίο κάθε στοιχείο του πίνακα είναι μια νέα γραμμή και \'variables\', ένα αντικείμενο με κλειδιά ως ονόματα μεταβλητών και τιμές ως περιγραφές μεταβλητών.. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean που υποδεικνύει αν θα εμφανιστεί ο συντάκτης στο χρήστη. Default: `true`.
* __editorProps__ | `object`: αντικείμενο των ιδιοτήτων που πρέπει να μεταβιβαστούν στον `TextEditor` (δείτε την τεκμηρίωση για <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: συμβολοσειρά που υποδεικνύει τον τίτλο του εξερευνητή που θα εμφανιστεί. Default: `none`.
* __dataTable__ | `boolean`: boolean τιμή που υποδεικνύει αν θα αποκρύψετε τον πίνακα δεδομένων από την προβολή. Default: `true`.
* __dataTableProps__ | `object`: ιδιότητες που μεταβιβάζονται στο στοιχείο πίνακα δεδομένων (βλ. τεκμηρίωση για <DataTable />). Default: `{}`.
* __history__ | `boolean`: ελέγχει αν θα εμφανίζεται αρχείο καταγραφής ιστορικού των ενεργειών που έχουν εκτελεστεί. Default: `true`.
* __reportMode__ | `string`: ελέγχει αν θα συγχρονίζονται οι αλλαγές του συντάκτη για όλους (`collaborative`), για όλους τους χρήστες σε ομάδες (`group`) ή όχι (`individual`). Default: `'individual'`.
* __histogramDensities__ | `boolean`: boolean τιμή που υποδεικνύει αν θα εμφανίζονται οι πυκνότητες του ιστογράμματος. Default: `true`.
* __models__ | `array`: πίνακας συμβολοσειρών που υποδεικνύουν τα μοντέλα που μπορούν να προσαρμοστούν στα δεδομένα. Default: `[
  'Simple Linear Regression',
  'Multiple Linear Regression',
  'LASSO',
  'Decision Tree',
  'Random Forest',
  'Logistic Regression',
  'Naive Bayes',
  'PCA',
  'Hierarchical Clustering',
  'kmeans'
]`.
* __opened__ | `string`: σελίδα που ανοίγει κατά την εκκίνηση. Default: `none`.
* __plots__ | `array`: πίνακας συμβολοσειρών που υποδεικνύουν ποια διαγράμματα θα εμφανιστούν στο χρήστη. Default: `[
  'Bar Chart',
  'Pie Chart',
  'Mosaic Plot',
  'Histogram',
  'Interval Plot',
  'Box Plot',
  'Line Plot',
  'Scatterplot',
  'Scatterplot Matrix',
  'Heat Map',
  'Contour Chart',
  'Violin Plot',
  'QQ Plot'
]`.
* __questions__ | `(array|object)`: συστοιχία κόμβων με στοιχεία κειμένου και ερωτήσεων που θα εμφανίζονται σε μια καρτέλα `questions` ή ένα αντικείμενο ιδιοτήτων που μεταβιβάζεται σε μια υποκείμενη `<Pages />` συστατικό. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean που υποδεικνύει αν θα εμφανίζονται οι αποφάσεις που λαμβάνονται για κάθε δοκιμή με βάση τις υπολογισμένες τιμές p-values. Default: `true`.
* __statistics__ | `array`: πίνακας συμβολοσειρών που υποδεικνύει ποιες συνοπτικές στατιστικές μπορούν να υπολογιστούν. Default: `[
  'Mean',
  'Median',
  'Min',
  'Max',
  'Range',
  'Interquartile Range',
  'Standard Deviation',
  'Variance',
  'Correlation',
  'Correlation Matrix',
  'Skewness',
  'Excess Kurtosis',
  'First Quartile',
  'Third Quartile',
  'Quantile',
  'Five-Number Summary'
]`.
* __style__ | `object`: Στυλ CSS inline για το κύριο δοχείο. Default: `{}`.
* __tables__ | `array`: πίνακας συμβολοσειρών που υποδεικνύει ποιοι πίνακες μπορούν να δημιουργηθούν από τα δεδομένα. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: συστοιχία αντικειμένων και κλειδιών που υποδεικνύουν τυχόν προσαρμοσμένες καρτέλες προς προσθήκη. Default: `[]`.
* __tests__ | `array`: πίνακας συμβολοσειρών που υποδεικνύει ποιες δοκιμές υποθέσεων πρέπει να συμπεριληφθούν. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-square Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean που υποδεικνύει αν θα εμφανιστούν τα εργαλεία μετασχηματισμού μεταβλητών. Default: `true`.
* __onTutorialCompletion__ | `function`: συνάρτηση που καλείται όταν ο χρήστης έχει ολοκληρώσει το σεμινάριο εξερεύνησης δεδομένων. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: συνάρτηση που καλείται όταν ο χρήστης ξεκινά το σεμινάριο εξερεύνησης δεδομένων. Default: `onTutorialStart() {}`.


## Παραδείγματα

In creating a data explorer, one needs a *.json dataset. This step may be accomplished by including the following in the header of a *.isle file:

```js
require:
    dataName: "./dataName.json"
```

Consider a dataset called "heartdisease" with the following variables:
* __Gender__: _Categorical_
* __Drugs__: _Categorical_
* __Complications__: _Categorical_
* __Cost__: _Quantitative_
* __Age__: _Quantitative_
* __Interventions__: _Quantitative_
* __ERVisit__: _Quantitative_
* __Comorbidities__: _Quantitative_
* __Duration__: _Quantitative_

We will include the explorer with the following code:

```jsx live
<DataExplorer 
    id="heartdisease"
    data={heartdisease} 
    categorical={[ 'Gender', 'Drugs', 'Complications' ]}
    quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
    tests={[]}
/>
```



