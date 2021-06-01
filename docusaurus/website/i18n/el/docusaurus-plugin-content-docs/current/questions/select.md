---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Ένα στοιχείο επιλογής ερωτήσεων.

## Επιλογές

* __question__ | `(string|node)`: ερώτηση για την οποία ο μαθητής πρέπει να επιλέξει μία από τις διαθέσιμες επιλογές απάντησης. Default: `''`.
* __options__ | `array (required)`: διαθέσιμες επιλογές απαντήσεων από τις οποίες ο μαθητής μπορεί να επιλέξει. Default: `none`.
* __solution__ | `number`: δείκτης του στοιχείου της λύσης στο `options`. Default: `none`.
* __preselected__ | `number`: δείκτης προεπιλεγμένης επιλογής απάντησης. Default: `0`.
* __inline__ | `boolean`: ελέγχει αν το συστατικό απεικονίζεται inline ή όχι. Default: `false`.
* __hintPlacement__ | `string`: τοποθέτηση των υποδείξεων (είτε "πάνω", "αριστερά", "δεξιά" ή "κάτω"). Default: `'top'`.
* __hints__ | `array<(string|node)>`: υποδείξεις που παρέχουν καθοδήγηση για τον τρόπο απάντησης στην ερώτηση. Default: `[]`.
* __feedback__ | `boolean`: ελέγχει αν θα εμφανίζονται κουμπιά ανάδρασης. Default: `true`.
* __chat__ | `boolean`: ελέγχει αν το στοιχείο θα πρέπει να έχει ενσωματωμένη συνομιλία. Default: `false`.
* __provideFeedback__ | `boolean`: υποδεικνύει αν θα πρέπει να εμφανίζεται ανατροφοδότηση που θα περιλαμβάνει τη σωστή απάντηση μετά την υποβολή των απαντήσεων από τους μαθητές. Default: `true`.
* __failureMsg__ | `string`: μήνυμα που θα εμφανίζεται όταν ο μαθητής επιλέγει λάθος απάντηση. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: μήνυμα που θα εμφανίζεται όταν ο μαθητής επιλέγει τη σωστή απάντηση. Default: `'That's the correct answer!'`.
* __points__ | `number`: μέγιστος αριθμός μορίων που χορηγούνται κατά τη βαθμολόγηση. Default: `10`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onChange__ | `function`: callback που ενεργοποιείται μετά την ενέργεια submit. Default: `onChange() {}`.
* __onSubmit__ | `function`: έχει ως πρώτη παράμετρο ένα `boolean` που δείχνει αν η απάντηση απαντήθηκε σωστά (αν ισχύει, αλλιώς `null`) και την απάντηση που δόθηκε ως δεύτερη παράμετρο.. Default: `onSubmit() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Hints', value: 'with Hints' },
        { label: 'Submit Function Hints', value: 'submitFunction' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}
/>
```
</TabItem>

<TabItem value="inline">

```jsx live
The usual t-test is:
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    inline
/> ... so you can us it in the midst of a longer paragraph
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestion
    question="White is "
    solution={1}
    options={[
        'a primary color',
        'not a primary color'
    ]}
    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<SelectQuestion
    question="Select the primary color"
    solution={2}
    options={[
        'orange',
        'white',
        'red'
    ]}
    onSubmit={(result) => {
        switch ( result ) {
            case 'orange':
                alert( 'No, orange is a mix of yellow and red.' );
            break;
            case 'white':
                alert( 'White does not count as a color.' );
            break;
            case 'red':
                alert( 'That is correct.' );
            break;
        }
    }}
    provideFeedback={false}
/> 
```
</TabItem>

</Tabs>
