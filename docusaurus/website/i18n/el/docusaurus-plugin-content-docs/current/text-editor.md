---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Ένας επεξεργαστής κειμένου για τη σύνταξη σημειώσεων ή αναφορών. Υποστηρίζει την εξαγωγή σημειώσεων σε αρχεία HTML ή PDF, καθώς και την αυτόματη υποβολή στον διακομιστή ISLE.

## Επιλογές

* __allowSubmissions__ | `boolean`: ελέγχει αν οι μαθητές μπορούν να υποβάλλουν τις εκθέσεις τους στο διακομιστή. Default: `true`.
* __canLoadHTML__ | `boolean`: ελέγχει αν θα εμφανίζεται το κουμπί για τη φόρτωση ενός αποθηκευμένου αρχείου HTML στον επεξεργαστή. Default: `true`.
* __defaultValue__ | `string`: προεπιλεγμένο κείμενο του συντάκτη. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: ελέγχει αν ο συντάκτης θα πρέπει να περιλαμβάνει προβολή ιστορικού. Default: `true`.
* __mode__ | `string`: ελέγχει τη λειτουργία επεξεργασίας κειμένου (είτε "ατομική" για ένα προσωπικό έγγραφο, είτε "ομαδική" για ένα έγγραφο ανά ομάδες, είτε "συνεργατική" για ένα ενιαίο έγγραφο για όλους, είτε "κοόρτη" για ένα έγγραφο ανά κοόρτη).. Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: αντικείμενο για την προσαρμογή του modal για την επαναφορά του εγγράφου (συνήθως δεν πρέπει να αλλάζει). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: ελέγχει αν θα στέλνει email επιβεβαίωσης με έξοδο PDF/HTML κατά την υποβολή. Default: `false`.
* __voiceTimeout__ | `number`: χρόνος σε χιλιοστά του δευτερολέπτου μετά την εισαγωγή ενός τμήματος ηχογραφημένης φωνητικής εισόδου. Default: `5000`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Default Value', value: 'defaultValue' },
        { label: 'Mode', value: 'mode' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextEditor  />
```

</TabItem>

<TabItem value="defaultValue">

```jsx live
<TextEditor defaultValue={`# Welcome!

This is a text that uses **markdown**

## Second Heading Level

[Wikipedia Link](https://https://www.wikipedia.org/).
`} />
```

</TabItem>

<TabItem value="mode">

```jsx live
<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." 
mode="individual" />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<TextEditor  
  defaultValue="[Generate CSS-Gradients Online!](https://cssgradient.io/)"
  style={{ 
    background: 'green',
    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' 
  }}
/>
```

</TabItem>

</Tabs>
