---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Ένα κουμπί που εμφανίζεται στο τέλος ενός μαθήματος για να κάνουν κλικ οι μαθητές. Από προεπιλογή, ένα μήνυμα που επιβεβαιώνει την ολοκλήρωση του μαθήματος αποστέλλεται στη διεύθυνση ηλεκτρονικού ταχυδρομείου τους.

## Επιλογές

* __coverage__ | `array<string>`: κατάλογος των αναγνωριστικών στοιχείων που πρέπει να υποβληθούν και να συμπεριληφθούν στο έγγραφο απάντησης. Default: `none`.
* __label__ | `string`: ετικέτα του κουμπιού υποβολής. Default: `none`.
* __message__ | `string`: μήνυμα για email επιβεβαίωσης. Default: `''`.
* __requireLogin__ | `boolean`: ελέγχει αν θα απαιτείται η σύνδεση του χρήστη για να είναι ενεργό το κουμπί (για ανώνυμους χρήστες, δεν αποστέλλεται επιβεβαίωση μέσω email). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: ελέγχει αν θα στείλει email επιβεβαίωσης κατά την υποβολή του μαθήματος. Default: `true`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onClick__ | `function`: callback που καλείται όταν κάνετε κλικ στο κουμπί υποβολής. Default: `onClick() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Label', value: 'customLabel' },
        { label: 'Email Feedback', value: 'emailFeedback' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<LessonSubmit />
```

</TabItem>

<TabItem value="customLabel">

```jsx live
<LessonSubmit label="Click to submit" />
```

</TabItem>

<TabItem value="withEmail">

```jsx live
<LessonSubmit 
    style={{ outline: '4px solid black'}}
    message={`
    Hi,
    I am very glad that you solved this lesson. Congratulations! 
    It was a sophisticated one.
    If you want some help how to use ISLE, have a look a 
    [this site](https://isledocs.com/docs/)
    
    Best
    The ISLE team
    `}
    label="Click to submit" />
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<LessonSubmit 
    requireLogin={false}
    onClick={() => {
        alert( 'The Button has been clicked...' );
    }}
    label="Click to submit" />
```
</TabItem>

</Tabs>
