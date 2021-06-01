---
id: clock
title: Clock
sidebar_label: Clock
---

Στοιχείο ρολογιού που εμφανίζει την τρέχουσα ώρα.

## Επιλογές

* __duration__ | `boolean`: αν έχει οριστεί, εμφανίζεται η διάρκεια της συνεδρίας (όχι ο πραγματικός χρόνος). Default: `false`.
* __format__ | `string`: μορφή ώρας (είτε `HH:MM`, `HH:MM:SS`, είτε `HHH`). Default: `''`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Duration', value: 'duration' },
        { label: 'Format', value: 'format' },
        { label: 'With CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Clock />
```

</TabItem>

<TabItem value="duration">

```jsx live
<Clock duration />
```

</TabItem>

<TabItem value="format">

```jsx live
<Clock format='HH:MM'/>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Clock format='HH:MM:SS' style={{ fontSize: 120, fontFamily: 'Open Sans Condensed'}}/>
```

</TabItem>

</Tabs>

