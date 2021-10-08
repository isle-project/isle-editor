---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

Ένα στοιχείο ISLE που αποδίδει μια ερώτηση πολλαπλής επιλογής. Υποστηρίζει την περίπτωση όπου ο μαθητής πρέπει να επιλέξει μία μόνο απάντηση και όταν μπορεί να υπάρχουν πολλές σωστές απαντήσεις και πρέπει να επιλεγούν όλες οι σωστές.

## Επιλογές

* __question__ | `(string|node)`: η ερώτηση που εμφανίζεται στην κορυφή του στοιχείου πολλαπλής επιλογής. Default: `''`.
* __solution__ | `(number|array)`: αριθμός που δηλώνει ποια απάντηση είναι σωστή ή μια "σειρά" αριθμών σωστών απαντήσεων σε περίπτωση που ο μαθητής πρέπει να είναι σε θέση να επιλέξει πολλαπλές απαντήσεις. Default: `none`.
* __answers__ | `array (required)`: μια "συστοιχία" αντικειμένων απάντησης. Κάθε απάντηση θα πρέπει να είναι ένα αντικείμενο με πεδία `content` και `explanation`, τα οποία δηλώνουν την εμφανιζόμενη επιλογή απάντησης και μια εξήγηση που είναι ορατή μετά την υποβολή της ερώτησης για να εξηγήσει γιατί η απάντηση είναι σωστή ή λανθασμένη.. Default: `none`.
* __hintPlacement__ | `string`: τοποθέτηση των υποδείξεων (είτε `top`, `left`, `right` ή `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: υποδείξεις που παρέχουν καθοδήγηση για τον τρόπο απάντησης στην ερώτηση. Default: `[]`.
* __feedback__ | `boolean`: ελέγχει αν θα εμφανίζονται κουμπιά ανάδρασης. Default: `true`.
* __disabled__ | `boolean`: ελέγχει αν η ερώτηση είναι απενεργοποιημένη. Default: `false`.
* __chat__ | `boolean`: ελέγχει αν το στοιχείο θα πρέπει να έχει ενσωματωμένη συνομιλία. Default: `false`.
* __provideFeedback__ | `string`: είτε "πλήρης", "επαυξητική" ή "καμία". Εάν `full`, η ανατροφοδότηση που περιλαμβάνει τη σωστή απάντηση εμφανίζεται αφού οι μαθητές υποβάλουν τις απαντήσεις τους- εάν `incremental`, η ανατροφοδότηση εμφανίζεται μόνο για την επιλεγμένη απάντηση- εάν `none`, δεν επιστρέφεται καμία ανατροφοδότηση.. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: ελέγχει αν θα απενεργοποιηθούν οι ειδοποιήσεις υποβολής. Default: `false`.
* __displaySolution__ | `boolean`: ελέγχει αν η λύση εμφανίζεται εκ των προτέρων. Default: `false`.
* __until__ | `Date`: χρόνος μέχρι να επιτραπεί στους μαθητές να υποβάλουν απαντήσεις. Default: `none`.
* __points__ | `number`: μέγιστος αριθμός μορίων που χορηγούνται κατά τη βαθμολόγηση. Default: `10`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onChange__ | `function`: λαμβάνει το δείκτη της επιλεγμένης ερώτησης ως μοναδικό όρισμα (ή έναν πίνακα σε περίπτωση που η ερώτηση είναι τύπου "Choose all that apply").. Default: `onChange(){}`.
* __onSubmit__ | `function`: callback που καλείται μετά την υποβολή μιας απάντησης. Default: `onSubmit(){}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="singleAnswer"
    values={[
        { label: 'Single Answer', value: 'singleAnswer' },
        { label: 'Formatted Answers', value: 'formattedAnswers' },
        { label: 'Instant Feedback', value: 'instantFeedback' },
        { label: 'Multiple Answers', value: 'multipleAnswers' },
        { label: 'Series of Questions', value: 'aSeries' },
        { label: 'With Hints', value: 'withHints' }
    ]}
    lazy
>

<TabItem value="singleAnswer">

```jsx live
<MultipleChoiceQuestion
    solution={0}
    answers={[
        {content:"Hierarchical Clustering"},
        {content:"LASSO"},
        {content:"Multiple regression"}
    ]}
    question="Which of the following methods are used for clustering?"
/>
```

</TabItem>

<TabItem value="formattedAnswers" >

```jsx live
<MultipleChoiceQuestion
    answers={[
        {content: <span>**bold**</span>},
        {content: <span>*italic*</span>},
        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}
    ]}
    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}
/>
```

</TabItem>

<TabItem value="instantFeedback">

```jsx live
<MultipleChoiceQuestion
    solution={0}
    answers={[
        {content:"Hierarchical Clustering"},
        {content:"LASSO"},
        {content:"Multiple regression"}
    ]}
    question="Which of the following methods are used for clustering?"
    provideFeedback="full"
/>
```

</TabItem>

<TabItem value="multipleAnswers">

```jsx live
<MultipleChoiceQuestion
    solution={[ 0, 3 ]}
    answers={[
        {content:"Hierarchical Clustering"},
        {content:"LASSO"},
        {content:"Multiple regression"},
        {content:"kmeans"}
    ]}
    question="Which of the following methods are used for clustering?"
    style={{ background: '#FFF6F3'}}
/>
```

</TabItem>

<TabItem value="aSeries">

```jsx live
<Slider>
    <MultipleChoiceQuestion
        solution={[ 1, 3 ]}
        answers={[
            { content:"George Washington", explanation: "Yes, he was the first president." },
            { content:"Benjamin Franklin", explanation: "He was a founding father."},
            { content:"Ulysses S. Grant", explanation: "General and 18th president." },
            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }
        ]}
        question="Who was not a president of the United States?"
        style={{ background: 'lightblue'}}
        feedback={false}
    />
    <MultipleChoiceQuestion
        solution={[ 0, 3 ]}
        answers={[
            {content:"Hierarchical Clustering", explanation:""},
            {content:"LASSO", explanation:""},
            {content:"Multiple regression", explanation:""},
            {content:"kmeans", explanation:""}
        ]}
        question="Which of the following methods are used for clustering?"
        style={{ background: '#FFF6F3'}}
        feedback={false}
    />
</Slider>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<MultipleChoiceQuestion
    solution={[ 1, 3 ]}
    answers={[
        { content:"George Washington", explanation: "Yes, he was the first president." },
        { content:"Benjamin Franklin", explanation: "He was a founding father."},
        { content:"Ulysses S. Grant", explanation: "General and 18th president." },
        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }
    ]}
    question="Who was not a president of the United States?"
    style={{ background: 'lightblue'}}
    feedback={false}
    hints={[
        'Washington - that is a no-brainer, isn\'t it?',
        'Franklin was famous for his invention of the lightning rod - so why become more?',
        'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.',
    ]}
    hintPlacement="top"
/>
```

</TabItem>

</Tabs>
