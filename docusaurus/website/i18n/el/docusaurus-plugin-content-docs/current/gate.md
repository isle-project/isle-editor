---
id: gate 
title: Gate
sidebar_label: Gate
---

Ένα στοιχείο ISLE που επιτρέπει την προβολή των παιδιών του μόνο σε αποκλειστικό κοινό.

## Επιλογές

* __user__ | `boolean`: όταν οριστεί, το περιεχόμενο με φραγμούς εμφανίζεται στους χρήστες. Default: `false`.
* __notUser__ | `boolean`: όταν έχει οριστεί, το περιεχόμενο με φραγμούς **δεν** εμφανίζεται στους χρήστες. Default: `false`.
* __enrolled__ | `boolean`: όταν οριστεί, το περιεχόμενο με πύλες εμφανίζεται στους μαθητές που είναι εγγεγραμμένοι στο μάθημα. Default: `false`.
* __notEnrolled__ | `boolean`: όταν έχει οριστεί, το περιεχόμενο με φραγμό **δεν** εμφανίζεται στους μαθητές που είναι εγγεγραμμένοι στο μάθημα. Default: `false`.
* __owner__ | `boolean`: όταν ρυθμιστεί, το περιεχόμενο με φραγμό εμφανίζεται στον ιδιοκτήτη του μαθήματος (συνήθως τον εκπαιδευτή). Default: `false`.
* __notOwner__ | `boolean`: όταν έχει οριστεί, το περιεχόμενο με φραγμό **δεν** εμφανίζεται στον ιδιοκτήτη του μαθήματος (συνήθως τον εκπαιδευτή). Default: `false`.
* __after__ | `Date`: χρόνος μετά τον οποίο τα περιεχόμενα της πύλης θα πρέπει να γίνουν ορατά. Default: `none`.
* __until__ | `Date`: χρόνος μέχρι το περιεχόμενο της πύλης να παραμείνει ορατό. Default: `none`.
* __banner__ | `node`: ένα προσαρμοσμένο μήνυμα που εμφανίζεται στους επισκέπτες για τους οποίους τα παιδιά της πύλης δεν είναι ορατά, αντί για το προεπιλεγμένο μήνυμα. Default: `none`.
* __disabled__ | `boolean`: αν μια πύλη είναι απενεργοποιημένη, το πανό θα εμφανίζεται ό,τι και να γίνει.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: ελέγχει αν θα εμφανίζονται τα περιεχόμενα της πύλης σε λειτουργία παρουσίασης όταν η πύλη είναι ορατή για τον "ιδιοκτήτη".. Default: `true`.
* __check__ | `function`: συνάρτηση επανάκλησης που επιστρέφει ένα `boolean` που δείχνει αν η πύλη θα πρέπει να εμφανίζει τα παιδικά στοιχεία- η συνάρτηση καλείται κάθε φορά που φτάνουν οι ενέργειες συνόδου. Default: `none`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Timed', value: 'timed' },
        { label: 'Hidden', value: 'hidden' },
        { label: 'Custom Banner', value: 'customBanner' },
        { label: 'Custom Check', value: 'customCheck' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Gate enrolled >
    <h1>Content for users enrolled in a cohort of the course</h1>
</Gate>
```

</TabItem>

<TabItem value="timed">

```jsx live
<Gate
    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}
    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}
>
    # Only visible in Fall 2020 semester
</Gate>
```

</TabItem>

<TabItem value="hidden">

```jsx live
<Gate banner={null} owner >
    <h1>Content for owners without a message for others</h1>
</Gate>
```

</TabItem>

<TabItem value="customBanner">

```jsx live
<Gate owner banner={<h3>Only visible by course owners...</h3>} >
    <h1> User Analytics </h1>
</Gate>
```

</TabItem>

<TabItem value="customCheck">

```jsx live
<Gate check={( ) => {
    return session.user.email === 'admin@cmu.edu';
}} >
    <h1> User Analytics only visible to specified user</h1>
</Gate>
```

</TabItem>

</Tabs>

