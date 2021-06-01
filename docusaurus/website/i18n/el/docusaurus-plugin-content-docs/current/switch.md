---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Το στοιχείο Switch επιτρέπει την εμφάνιση ενός στοιχείου από μια λίστα με πολλά στοιχεία. Οι χρήστες μπορούν να περιηγηθούν στα διάφορα παιδιά της ετικέτας Switch κάνοντας κλικ στο στοιχείο που εμφανίζεται αυτή τη στιγμή.

## Επιλογές

* __active__ | `boolean`: ελέγχει αν ο διακόπτης είναι ενεργός ή όχι. Default: `true`.
* __tooltip__ | `string`: tooltip που εμφανίζεται όταν ο χρήστης περνάει με το ποντίκι πάνω από το στοιχείο διακόπτη. Default: `none`.
* __tooltipPos__ | `string`: τοποθέτηση του tooltip (είτε `top`, `left`, `right`, ή `bottom`). Default: `'top'`.
* __className__ | `string`: όνομα κλάσης για το στοιχείο span που περικλείει. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onChange__ | `function`: callback που καλείται όταν γίνεται εναλλαγή στοιχείων. Λαμβάνει ως πρώτο όρισμα το δείκτη του τρέχοντος εμφανιζόμενου παιδιού.. Default: `onChange() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Tooltip', value: 'withTooltip' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withTooltip">

```jsx live
<Switch tooltip="Just click and see" tooltipPos="left">
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<Switch  
  style={{ fontSize: 80, fontFamily: 'Open Sans Condensed'}} 
>
    <span>Some Clouds</span>
    <img src="https://bit.ly/3rLGE30" />
    <img src ="https://bit.ly/2OzxEj3" />
</Switch>
```

</TabItem>

</Tabs>
