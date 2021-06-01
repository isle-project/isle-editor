---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Ένα στοιχείο κυκλικού διαγράμματος που από προεπιλογή εμφανίζει τις μετρήσεις όλων των κατηγοριών από μια επιλεγμένη μεταβλητή.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __variable__ | `(string|Factor) (required)`: μεταβλητή για την εμφάνιση. Default: `none`.
* __group__ | `(string|Factor)`: μεταβλητή ομαδοποίησης. Default: `none`.
* __summaryVariable__ | `string`: προαιρετική μεταβλητή της οποίας το άθροισμα θα εμφανίζεται για κάθε κατηγορία "μεταβλητών. Default: `none`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Summary Variable', value: 'summaryVariable' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="summaryVariable">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    summaryVariable="Cost"
/>
```

</TabItem>

</Tabs>
