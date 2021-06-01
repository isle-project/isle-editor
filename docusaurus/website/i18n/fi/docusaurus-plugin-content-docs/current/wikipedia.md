---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

**Wikipedia**-komponentti skannaa **Wikipedia**:n ja palauttaa merkinnän, jos syötetyn hakusanan alta löytyy jotain kelvollista.

## Vaihtoehdot

* __defaultEntry__ | `string`: oletusarvoisesti näytettävä merkintä. Default: `none`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

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
