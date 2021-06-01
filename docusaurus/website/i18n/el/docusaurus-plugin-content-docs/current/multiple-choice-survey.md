---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Μια συνιστώσα έρευνας στην οποία ο εκπαιδευτής μπορεί να συλλέξει δεδομένα έρευνας πολλαπλών επιλογών από τους μαθητές σε πραγματικό χρόνο.

## Επιλογές

* __question__ | `(string|node)`: συμβολοσειρά που υποδεικνύει την ερώτηση προς τους μαθητές. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: ελέγχει αν κάποιος επιθυμεί να επιτρέψει στους μαθητές να απαντήσουν στην έρευνα πολλές φορές. Default: `false`.
* __anonymous__ | `boolean`: ελέγχει αν οι απαντήσεις των μαθητών είναι ανώνυμες. Default: `false`.
* __answers__ | `array`: πίνακας που υποδεικνύει τις επιλογές απαντήσεων για τους μαθητές. Default: `[]`.
* __multipleAnswers__ | `boolean`: υποδεικνύει αν οι μαθητές μπορούν να επιλέξουν περισσότερες από μία απαντήσεις. Σημειώστε ότι αυτό διαφέρει από το allowMultipleAnswers στο ότι το allow κάνει τους μαθητές να μπορούν να υποβάλουν την ερώτηση πολλές φορές.. Default: `false`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onSubmit__ | `function`: συνάρτηση που καλείται όταν υποβάλλεται μια απάντηση. Default: `onSubmit() {}`.


## Παραδείγματα

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

