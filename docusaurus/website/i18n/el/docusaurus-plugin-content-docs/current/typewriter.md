---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Ένα στοιχείο ISLE που σας επιτρέπει να δημιουργήσετε ένα εφέ γραφομηχανής.

## Επιλογές

* __delay__ | `number`: αρχική καθυστέρηση πριν από την εκκίνηση της γραφομηχανής (σε χιλιοστά του δευτερολέπτου). Default: `none`.
* __hold__ | `number`: αν το text είναι ένας πίνακας συμβολοσειρών, το hold καθορίζει τη διάρκεια που θα εμφανίζεται η γραμμή πριν περάσει στο επόμενο στοιχείο του πίνακα. Default: `2000`.
* __interval__ | `number`: το χρονικό διάστημα της γραφομηχανής (σε χιλιοστά του δευτερολέπτου). Default: `100`.
* __random__ | `boolean`: αν έχει οριστεί η επιλογή random, οι πληκτρολογήσεις θα εκτελούνται με μια ορισμένη, "ανθρώπινη" τυχαιότητα. Default: `false`.
* __sound__ | `boolean`: το πληκτρολόγιο που πληκτρολογήσατε θα ακουστεί επίσης. Default: `false`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __text__ | `(string|array<string>)`: το πλήρες κείμενο που θα εμφανιστεί ή μια σειρά κειμένων που θα εμφανιστούν διαδοχικά. Default: `''`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Delay and Sound', value: 'delayAndSound' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Array of Strings', value: 'array' },
        { label: 'Humanized', value: 'humanized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Typewriter text="Lorem ipsum" />
```

</TabItem>

<TabItem value="delayAndSound">

```jsx live
<Typewriter text="Lorem ipsum" sound delay={2000} />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Typewriter text="Styled Text" style={{ fontSize: 66, color: 'red'}} />
```

</TabItem>

<TabItem value="array">

```jsx live
<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />
```

</TabItem>

<TabItem value="humanized">

```jsx live
<Typewriter text="This is a humanized performance" random interval={170} />
```

</TabItem>

</Tabs>

