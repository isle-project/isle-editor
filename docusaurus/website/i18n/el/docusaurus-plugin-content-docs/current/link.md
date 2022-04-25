---
id: link
title: Link
sidebar_label: Link
---

Ένα στοιχείο για την εμφάνιση ενός συνδέσμου.

## Επιλογές

* __href__ | `string (required)`: URL του δικτυακού τόπου στον οποίο θα παραπέμψετε. Default: `none`.
* __download__ | `(string|boolean)`: καθορίζει αν ο σύνδεσμος θα πρέπει να μεταφορτωθεί: τίθεται σε `true` για να εξαναγκαστεί η μεταφόρτωση, ή μια συμβολοσειρά για να καθοριστεί το όνομα του αρχείου- αν `false`, δεν εξαναγκάζεται η μεταφόρτωση.. Default: `false`.
* __target__ | `string`: ορίζει πού ανοίγει ο σύνδεσμος: ορίζεται σε `_blank` για νέο παράθυρο, `_self` για το δικό του πλαίσιο, `_parent` για τον γονέα, `_top` για ολόκληρο το σώμα του παραθύρου ή το όνομα του πλαισίου.. Default: `'_blank'`.
* __windowFeatures__ | `string`: λίστα χαρακτηριστικών παραθύρου με διαχωρισμό με κόμμα για το άνοιγμα του συνδέσμου σε νέο παράθυρο (βλέπε: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: undefined. Default: `false`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'New Page', value: 'newPage' },
        { label: 'Image Link', value: 'imageLink' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

</TabItem>

<TabItem value="newPage">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">New Wikipedia Page</Link>
```
</TabItem>

<TabItem value="imageLink">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">
<img src= "https://bit.ly/3aM4OU7" /></Link>
```

</TabItem>

</Tabs>
