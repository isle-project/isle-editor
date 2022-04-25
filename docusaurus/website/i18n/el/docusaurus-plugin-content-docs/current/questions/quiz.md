---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Ένα στοιχείο κουίζ που εμφανίζει μια ακολουθία στοιχείων ερωτήσεων.

## Επιλογές

* __confidence__ | `boolean`: αν θα εμφανίζεται μια κλίμακα Likert που θα ζητά την εμπιστοσύνη της απάντησης του χρήστη. Default: `false`.
* __forceConfidence__ | `boolean`: ελέγχει αν ο χρήστης πρέπει να δώσει ένα επίπεδο εμπιστοσύνης πριν προχωρήσει στην επόμενη ερώτηση. Default: `false`.
* __count__ | `number`: τον αριθμό των ερωτήσεων που θα συμπεριληφθούν στο κουίζ. Default: `none`.
* __questions__ | `array (required)`: σειρά ερωτήσεων από την οποία θα επιλεγούν τυχαία οι ερωτήσεις. Default: `none`.
* __active__ | `boolean`: ελέγχει αν ο χρονοδιακόπτης για το κουίζ είναι ενεργός. Default: `true`.
* __duration__ | `number`: διάρκεια του κουίζ (σε λεπτά)- μόλις τελειώσει ο χρόνος, θα εμφανιστεί η σελίδα σύνοψης. Default: `none`.
* __skippable__ | `boolean`: ελέγχει αν οι ερωτήσεις στο κουίζ μπορούν να παραλειφθούν. Default: `true`.
* __footerNodes__ | `array`: πίνακας κόμβων που θα εμφανίζονται στο υποσέλιδο κάθε ερώτησης. Default: `[]`.
* __nextLabel__ | `string`: ετικέτα του κουμπιού για να προχωρήσετε στην επόμενη ερώτηση. Default: `none`.
* __provideFeedback__ | `boolean`: ελέγχει αν θα εμφανίζεται στους μαθητές ανατροφοδότηση σχετικά με την ορθότητα των απαντήσεών τους μετά την ολοκλήρωση του κουίζ. Default: `true`.
* __showFinishButton__ | `boolean`: ελέγχει αν θα εμφανίζεται το κουμπί για να ολοκληρωθεί το κουίζ και να μεταβείτε απευθείας στη σελίδα αποτελεσμάτων. Default: `false`.
* __finishLabel__ | `string`: ετικέτα του κουμπιού για την ολοκλήρωση του κουίζ. Default: `none`.
* __downloadButton__ | `boolean`: ελέγχει αν θα εμφανίζεται ένα κουμπί για τη λήψη των απαντήσεων. Default: `true`.
* __repeatable__ | `boolean`: ελέγχει αν το κουίζ μπορεί να επαναληφθεί. Default: `false`.
* __onFinished__ | `function`: callback που καλείται όταν το κουίζ τελειώσει και εμφανιστεί η σελίδα αποτελεσμάτων. Default: `onFinished() {}`.
* __onSubmit__ | `function`: callback που καλείται όταν ο χρήστης υποβάλλει μια απάντηση. Default: `onSubmit() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Subset of Questions', value: 'subset' },
        { label: 'Not Skippable', value: 'notSkippable' },
        { label: 'Confidence Check', value: 'confidenceCheck' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Quiz
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="subset">

```jsx live
<Quiz
    count={3}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="notSkippable" >

```jsx live
<Quiz
    skippable={false}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="confidenceCheck">

```jsx live
<Quiz
    confidence
    forceConfidence
    count={4}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

</Tabs>
