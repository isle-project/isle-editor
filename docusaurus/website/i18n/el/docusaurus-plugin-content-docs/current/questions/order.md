---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Ένα στοιχείο ερωτήσεων τάξης που ζητά από τον μαθητή να φέρει μια συλλογή στοιχείων στη σωστή σειρά.

## Επιλογές

* __question__ | `(string|node)`: ερώτηση για την οποία ο μαθητής πρέπει να φέρει τις διαθέσιμες "επιλογές" στη σωστή σειρά. Default: `''`.
* __options__ | `array (required)`: μια σειρά από κείμενα τα οποία ο μαθητής πρέπει να φέρει στη σωστή σειρά (υποτίθεται ότι είναι η σειρά που παρέχεται). Default: `none`.
* __provideFeedback__ | `boolean`: ελέγχει αν θα εμφανίζεται ειδοποίηση για το αν η υποβληθείσα απάντηση είναι σωστή ή όχι. Default: `true`.
* __hintPlacement__ | `string`: τοποθέτηση των υποδείξεων (είτε `top`, `left`, `right` ή `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: υποδείξεις που παρέχουν καθοδήγηση για τον τρόπο απάντησης στην ερώτηση. Default: `[]`.
* __feedback__ | `boolean`: ελέγχει αν θα εμφανίζονται κουμπιά ανάδρασης. Default: `true`.
* __chat__ | `boolean`: ελέγχει αν το στοιχείο θα πρέπει να έχει ενσωματωμένη συνομιλία. Default: `false`.
* __failureMsg__ | `string`: μήνυμα που θα εμφανίζεται όταν ο μαθητής υποβάλλει λανθασμένη απάντηση. Default: `none`.
* __successMsg__ | `string`: μήνυμα που θα εμφανίζεται όταν ο μαθητής υποβάλλει τη σωστή απάντηση. Default: `none`.
* __disableSubmitNotification__ | `boolean`: ελέγχει αν θα απενεργοποιηθούν οι ειδοποιήσεις υποβολής. Default: `false`.
* __until__ | `Date`: χρόνος μέχρι να επιτραπεί στους μαθητές να υποβάλουν απαντήσεις. Default: `none`.
* __points__ | `number`: μέγιστος αριθμός μορίων που χορηγούνται κατά τη βαθμολόγηση. Default: `10`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onChange__ | `function`: έχει δύο παραμέτρους: ένα `boolean` που δείχνει αν τα στοιχεία τοποθετήθηκαν με τη σωστή σειρά και ένα `array` με την τρέχουσα σειρά.. Default: `onChange() {}`.
* __onSubmit__ | `function`: έχει ως μοναδική παράμετρο ένα "boolean" που δείχνει αν τα στοιχεία τοποθετήθηκαν με τη σωστή σειρά.. Default: `onSubmit() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Hints', value: 'hints' },
        { label: 'Submit Function', value: 'submitFunction' },
        { label: 'With Points and Feedback Message', value: 'withGradingAndFeedback' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
/>
```
</TabItem>

<TabItem value="hints">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
    hints={[ 'Delta succeeds Gamma in the Greek alphabet' ]}
    hintPlacement="bottom"
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "A",
        "G",
        "V"
    ]}
    onSubmit={() => {
        alert( 'Any JavaScript function could be executed here...' );
    }}
/>
```
</TabItem>

<TabItem value="withGradingAndFeedback">

```jsx live
<OrderQuestion
    question="Arrange the events in historical order"
    options={[
        "Napoleon's coronation as emperor",
        "The Crimean War",
        "Bombing of Hiroshima",
        "Fall of the Berlin Wall",
        "Donald Trump's inauguration",
    ]}
    points={10}
    successMsg = "Great! Looks like you are a history expert"
/>
```
</TabItem>

</Tabs>
