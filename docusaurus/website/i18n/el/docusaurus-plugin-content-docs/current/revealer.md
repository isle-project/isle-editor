---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Ένα στοιχείο του ISLE που οι εκπαιδευτές μπορούν να χρησιμοποιήσουν για να αποκαλύπτουν ή να αποκρύπτουν επιλεκτικά το περιεχόμενο των παιδιών σε όλους τους μαθητές κατά τη διάρκεια της τάξης.

## Επιλογές

* __message__ | `(string|node)`: μήνυμα που θα εμφανίζεται όταν το περιεχόμενο είναι κρυφό. Default: `none`.
* __show__ | `boolean`: ελέγχει αν θα εμφανίζονται αρχικά τα στοιχεία-παιδιά. Default: `false`.


## Παραδείγματα

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

