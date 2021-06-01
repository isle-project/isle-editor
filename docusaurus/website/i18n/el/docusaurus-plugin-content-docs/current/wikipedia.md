---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Το συστατικό **Wikipedia** σαρώνει την **Wikipedia** και επιστρέφει μια καταχώρηση αν βρεθεί κάτι έγκυρο κάτω από τον εισαγόμενο όρο αναζήτησης.

## Επιλογές

* __defaultEntry__ | `string`: προεπιλεγμένη καταχώρηση για εμφάνιση. Default: `none`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Entry', value: 'withEntry' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Wikipedia />
```

</TabItem>

<TabItem value="withEntry">

```jsx live
<Wikipedia defaultEntry="Angela Merkel" />
```

</TabItem>

</Tabs>
