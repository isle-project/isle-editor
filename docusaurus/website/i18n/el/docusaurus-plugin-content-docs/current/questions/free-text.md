---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Μια συνιστώσα ISLE για ερωτήσεις στις οποίες οι απαντήσεις των μαθητών πρέπει να παρέχονται με τη μορφή ελεύθερου κειμένου.

## Επιλογές

* __question__ | `(string|node)`: την ερώτηση που εμφανίζεται στην κορυφή του στοιχείου ερωτήσεων ελεύθερου κειμένου. Default: `''`.
* __hints__ | `array<(string|node)>`: υποδείξεις που παρέχουν καθοδήγηση για τον τρόπο απάντησης στην ερώτηση. Default: `[]`.
* __hintPlacement__ | `string`: τοποθέτηση των υποδείξεων (είτε `top`, `left`, `right` ή `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: ελέγχει αν θα εμφανίζονται κουμπιά ανάδρασης. Default: `true`.
* __solution__ | `(string|node)`: μια πρότυπη απάντηση στο πρόβλημα. Default: `''`.
* __instantSolution__ | `boolean`: αν μπορεί κανείς να αλλάξει αμέσως την εμφάνιση της πρότυπης απάντησης. Default: `false`.
* __rows__ | `number`: αριθμός γραμμών του πεδίου κειμένου για να πληκτρολογήσουν οι μαθητές τις απαντήσεις τους. Default: `5`.
* __chat__ | `boolean`: ελέγχει αν θα πρέπει να ενεργοποιηθεί η ομαδική συνομιλία για την ερώτηση. Default: `false`.
* __resizable__ | `boolean`: ελέγχει αν η περιοχή κειμένου θα πρέπει να μπορεί να αλλάξει το μέγεθός της. Default: `false`.
* __placeholder__ | `string`: κείμενο-υποκατάστατο που εμφανίζεται πριν ο χρήστης εισάγει κείμενο. Default: `''`.
* __disableSubmitNotification__ | `boolean`: ελέγχει αν θα απενεργοποιηθούν οι ειδοποιήσεις υποβολής. Default: `false`.
* __submissionMsg__ | `string`: ειδοποίηση που εμφανίζεται όταν ο μαθητής υποβάλλει για πρώτη φορά την απάντησή του. Default: `''`.
* __resubmissionMsg__ | `string`: ειδοποίηση που εμφανίζεται για όλες τις υποβολές μετά την πρώτη. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: υποδεικνύει αν θα πρέπει να εμφανίζεται ανατροφοδότηση που θα περιλαμβάνει τη σωστή απάντηση μετά την υποβολή των απαντήσεων από τους μαθητές. Default: `true`.
* __maxlength__ | `number`: μέγιστος επιτρεπόμενος αριθμός χαρακτήρων. Default: `2500`.
* __until__ | `Date`: χρόνος μέχρι να επιτραπεί στους μαθητές να υποβάλουν απαντήσεις. Default: `none`.
* __points__ | `number`: μέγιστος αριθμός μορίων που χορηγούνται κατά τη βαθμολόγηση. Default: `10`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onChange__ | `function`: callback που καλείται κάθε φορά που αλλάζει η τιμή της περιοχής κειμένου- λαμβάνει το τρέχον κείμενο ως μοναδικό όρισμα. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback που καλείται όταν ο χρήστης υποβάλλει μια απάντηση- λαμβάνει το υποβληθέν κείμενο ως μοναδικό όρισμα. Default: `onSubmit() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Points for Grading', value: 'withPointsForGrading' },
        { label: 'No Feedback', value: 'withoutFeedbackAndNotification' },
        { label: 'Solution', value: 'withSolution' },
        { label: 'Hints', value: 'withHints' },
        { label: 'Placeholder', value: 'placeholderText' },
        { label: 'Due Date', value: 'dueDate' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
/>
```
</TabItem>

<TabItem value="withPointsForGrading" >

```jsx live
<FreeTextQuestion 
    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} 
    rows={3} 
    points={15}
/>
```

</TabItem>

<TabItem value="withoutFeedbackAndNotification" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3}
    disableSubmitNotification 
    feedback={false}
/>
```

</TabItem>

<TabItem value="withSolution" > 

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
/>
```

</TabItem>

<TabItem value="withHints" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}
    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"
/>
```

</TabItem>

<TabItem value="placeholderText" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={3} 
    solution="Winston Churchill" 
    placeholder="Think of an overweight politician with a big cigar in his mouth."
/>
```

</TabItem>

<TabItem value="dueDate" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}
    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."
/>
```

</TabItem>

</Tabs>
