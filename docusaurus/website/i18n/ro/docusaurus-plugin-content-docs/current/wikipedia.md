---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Componenta **Wikipedia** scanează **Wikipedia** și returnează o intrare în cazul în care se găsește ceva valid pentru termenul de căutare introdus.

## Opțiuni

* __defaultEntry__ | `string`: intrarea implicită de afișat. Default: `none`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

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
