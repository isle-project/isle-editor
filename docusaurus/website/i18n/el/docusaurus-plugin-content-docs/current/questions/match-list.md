---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

Ένα στοιχείο ISLE που αποδίδει μια ερώτηση στην οποία ο μαθητής πρέπει να αντιστοιχίσει στοιχεία από δύο λίστες μεταξύ τους με τον σωστό τρόπο.

## Επιλογές

* __question__ | `(string|node)`: ερώτηση που θα εμφανίζεται στην κορυφή του στοιχείου ερωτήσεων της λίστας αντιστοιχιών. Default: `''`.
* __elements__ | `array<{a,b}>`: μια "συστοιχία" με τα σωστά ζεύγη που εμφανίζονται στην κορυφή του στοιχείου ερωτήσεων ελεύθερου κειμένου. Κάθε στοιχείο `array` πρέπει να είναι ένα `object` με τις ιδιότητες `a` και `b`- δώστε στοιχεία με μόνο τις ιδιότητες `a` ή `b` για να προσθέσετε αποσπασματικές απαντήσεις.. Default: `[]`.
* __hintPlacement__ | `string`: τοποθέτηση των υποδείξεων (είτε `top`, `left`, `right` ή `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: υποδείξεις που παρέχουν καθοδήγηση για τον τρόπο απάντησης στην ερώτηση. Default: `[]`.
* __provideFeedback__ | `boolean`: υποδεικνύει αν η λύση θα πρέπει να είναι προσβάσιμη μετά την υποβολή των απαντήσεων από τους μαθητές. Default: `true`.
* __feedback__ | `boolean`: ελέγχει αν θα εμφανίζονται κουμπιά ανάδρασης. Default: `true`.
* __chat__ | `boolean`: ελέγχει αν το στοιχείο θα πρέπει να έχει ενσωματωμένη συνομιλία. Default: `false`.
* __colorScale__ | `array`: αν οριστεί, τα παρεχόμενα χρώματα χρησιμοποιούνται για τα πλακίδια. Default: `none`.
* __shuffle__ | `string`: καθορίζει αν θα ανακατευτούν οι στήλες `left`, `right` ή "και οι δύο" των οποίων τα στοιχεία πρέπει να αντιστοιχιστούν- δώστε "καμία" ή οποιαδήποτε άλλη τιμή για να μην ανακατευτούν τα στοιχεία σε καμία πλευρά (μπορεί να είναι χρήσιμο στην περίπτωση που δεν υπάρχει λύση). Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: ελέγχει αν θα απενεργοποιηθούν οι ειδοποιήσεις υποβολής. Default: `false`.
* __submissionMsg__ | `string`: ειδοποίηση που εμφανίζεται όταν ο μαθητής υποβάλλει για πρώτη φορά την απάντησή του. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: ειδοποίηση που εμφανίζεται για όλες τις υποβολές μετά την πρώτη. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: χρόνος μέχρι να επιτραπεί στους μαθητές να υποβάλουν απαντήσεις. Default: `none`.
* __points__ | `number`: μέγιστος αριθμός μορίων που χορηγούνται κατά τη βαθμολόγηση. Default: `10`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback που καλείται όταν οι μαθητές υποβάλλουν μια απάντηση. Default: `onSubmit() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With Solution & Style', value: 'withFeedback' },
        { label: 'Shuffle Right', value: 'shuffleRight' },
        { label: 'Points for Grading', value: 'grading' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    elements={[
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { a: 'Ar', b: 'Argon' },
        { a: 'Ac' , b: 'Actinium'},
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
    provideFeedback={false}
/>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<MatchListQuestion
    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="withFeedback">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="shuffleRight">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Carl Friedrich', b: 'Gauß' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Francis', b: 'Galton' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'Ronald', b: 'Fisher' }
    ]}
    shuffle="right"
/>
```
</TabItem>

<TabItem value="grading">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Francis', b: 'Galton' },
        { a: 'Carl Friedrich', b: 'Gauß' }
    ]}
    points={20}
/>
```
</TabItem>

</Tabs>
