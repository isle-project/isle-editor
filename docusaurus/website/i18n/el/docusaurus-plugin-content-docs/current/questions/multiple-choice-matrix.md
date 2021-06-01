---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Ένα στοιχείο ISLE που αποδίδει έναν πίνακα ερωτήσεων πολλαπλής επιλογής με τις ίδιες απαντήσεις.

## Επιλογές

* __questions__ | `array (required)`: μια σειρά από ερωτήσεις. Default: `none`.
* __answers__ | `array (required)`: μια σειρά από απαντήσεις. Default: `none`.
* __title__ | `(string|node)`: τίτλος που θα εμφανίζεται στην κορυφή του πίνακα ερωτήσεων. Default: `none`.
* __solution__ | `array<array>`: boolean matrix το στοιχείο του οποίου υποδεικνύει αν το αντίστοιχο κουμπί επιλογής ή checkbox πρέπει να είναι τσεκαρισμένο. Default: `none`.
* __type__ | `string`: τύπος ερώτησης (το "ραδιόφωνο" αντιστοιχεί στο "Επιλέξτε ένα", το "πλαίσιο ελέγχου" στο "Επιλέξτε όλα όσα ισχύουν"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: ελέγχει αν θα απενεργοποιηθούν οι ειδοποιήσεις υποβολής. Default: `false`.
* __onChange__ | `function`: callback που καλείται όταν αλλάζει η τιμή ενός checkbox / radio button- καλείται με το δισδιάστατο boolean array της ενεργής κατάστασης για κάθε επιλογή απάντησης. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback που καλείται όταν ο χρήστης κάνει κλικ στο κουμπί "Υποβολή"- καλείται με τον δισδιάστατο πίνακα boolean της ενεργής κατάστασης για κάθε επιλογή απάντησης. Default: `onSubmit() {}`.


## Παραδείγματα

```jsx live
<MultipleChoiceMatrix 
    title="Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?" id="topics" 
    questions={[
        'Data Visualizations',
        'Hand calculations (e.g. standard deviation, z-scores)',
        'Combinatorics',
        'Basic probability theory (conditional probability, independence...)',
        'Calculus-based probability',
        'Sampling distributions',
        'Confidence intervals (traditional, formula-based)',
        'Boostrapping',
        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',
        'Simple linear regression',
        'Bayesian statistics',
        'Randomization- or simulation-based inference'
    ]}
    type="checkbox" 
    answers={[ 'I cover it', 'I think it\'s important' ]} 
/>
```
