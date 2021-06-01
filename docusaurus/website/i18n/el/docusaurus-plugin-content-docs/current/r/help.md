---
id: r-help
title: R Help
sidebar_label: R Help
---

Κάντε τις λέξεις να εμφανίζουν την τεκμηρίωση R σε ένα modal παράθυρο όταν τις κάνετε κλικ.

## Επιλογές

* __func__ | `string`: όνομα της συνάρτησης `R` για την οποία θα ανοίξει η τεκμηρίωση. Εάν δεν παρέχεται, το περιεχόμενο της ετικέτας `RHelp` θεωρείται ότι είναι ίσο με το όνομα της συνάρτησης. Default: `''`.
* __library__ | `string`: όνομα του πακέτου R στο οποίο βρίσκεται η συνάρτηση. Default: `'base'`.
* __visible__ | `boolean`: ελέγχει αν το παράθυρο βοήθειας θα πρέπει να ανοίγει κατά την εκκίνηση. Default: `false`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'From Library', value: 'otherLibrary' },
        { label: 'Visible on Startup', value: 'visible' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<span><RHelp>sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

<TabItem value="otherLibrary" >

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

</TabItem>

<TabItem value="visible" >

```jsx live
<span><RHelp visible={true} >sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

</Tabs>
