---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Μια ερώτηση με απάντηση που αποτελείται από πολλαπλά πλαίσια επιλογής.

## Επιλογές

* __question__ | `(string|node)`: ερώτηση που θα εμφανίζεται στην κορυφή του πίνακα επιλογής ερωτήσεων. Default: `''`.
* __rows__ | `array`: ετικέτες γραμμής. Default: `[]`.
* __cols__ | `array`: ετικέτες στήλης. Default: `[]`.
* __options__ | `object`: αντικείμενο με ζεύγη κλειδιών-τιμών με κλειδιά που έχουν τη μορφή `row:col`, π.χ. `0:0`, `0:1`, `1:0` κ.λπ., και οι αντίστοιχες τιμές τους είναι πίνακες με τις πιθανές επιλογές απαντήσεων για τις επιμέρους ερωτήσεις select.. Default: `{}`.
* __solution__ | `object`: αντικείμενο λύσης με ζεύγη κλειδιών-τιμών με κλειδιά που έχουν τη μορφή `row:col`, π.χ. `0:0`, `0:1`, `1:0` κ.λπ., και οι αντίστοιχες τιμές τους είναι ο δείκτης του σωστού στοιχείου απάντησης από τον αντίστοιχο πίνακα `options`.. Default: `{}`.
* __hints__ | `array<(string|node)>`: υποδείξεις που παρέχουν καθοδήγηση για τον τρόπο απάντησης στην ερώτηση. Default: `[]`.
* __hintPlacement__ | `string`: τοποθέτηση των υποδείξεων (είτε `top`, `left`, `right` ή `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: ελέγχει αν θα εμφανίζονται κουμπιά ανάδρασης. Default: `true`.
* __provideFeedback__ | `string`: αν θα παρέχει καθόλου ανατροφοδότηση, ατομική ανατροφοδότηση για την/τις υποβληθείσα/ες απάντηση/ες ή συνολική ανατροφοδότηση για όλες τις ερωτήσεις.. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: αν θα επιτρέπονται υποβολές χωρίς επιλογή σε κάθε πλαίσιο επιλογής. Default: `false`.
* __nTries__ | `number`: μετά από πόσες προσπάθειες δεν θα γίνονται δεκτές περαιτέρω απαντήσεις (αν το `provideFeedback` δεν είναι `none`). Default: `3`.
* __failureMsg__ | `string`: κείμενο ειδοποίησης που εμφανίζεται κατά την υποβολή λανθασμένων απαντήσεων. Default: `none`.
* __successMsg__ | `string`: κείμενο ειδοποίησης που εμφανίζεται κατά την υποβολή σωστών απαντήσεων. Default: `none`.
* __cellLabels__ | `object`: ετικέτες για κελιά που ορίζονται από αντικείμενο με κλειδιά που έχουν τη μορφή `row:col`. Default: `{}`.
* __chat__ | `boolean`: ελέγχει αν το στοιχείο θα πρέπει να έχει ενσωματωμένη συνομιλία. Default: `false`.
* __panelProps__ | `object`: πρόσθετες ιδιότητες που πρέπει να μεταβιβαστούν στο εξωτερικό στοιχείο <Panel /> . Default: `{}`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onChange__ | `function`: συνάρτηση επανάκλησης που καλείται κατά την αλλαγή των απαντήσεων. Default: `onChange() {}`.
* __onSubmit__ | `function`: συνάρτηση επανάκλησης που καλείται κατά την υποβολή με τις απαντήσεις ως πρώτη παράμετρο και ένα boolean που υποδεικνύει την ορθότητα ως δεύτερη παράμετρο. Default: `onSubmit() {}`.


## Παραδείγματα


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Feedback Messages', value: 'feedbackMessages' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestionMatrix
  question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
    hints={[
        'His father Johann Sebastian was a famous composer too',
        'He was famous for his FAUST - so definitely an author',
        'Poussin was an 18th century painter',
        'Courbet was a realistic painter'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestionMatrix
    style={{ 
        fontFamily: 'Georgia',
        fontSize: 22, 
        textShadow: '0 0  10px white',
        background: 'rgb(251,213,112)',
        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'
    }}
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>


<TabItem value="feedbackMessages">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    failureMsg="Sorry, that was wrong." 
    successMsg ="Wow! Congratulations, you are a specialist!"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```

</TabItem>

</Tabs>

