---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

A **Wikipedia** komponens átnézi a **Wikipédiát** és visszaad egy bejegyzést, ha a megadott keresőszó alatt bármi érvényeset talál.

## Opciók

* __defaultEntry__ | `string`: alapértelmezett megjelenítendő bejegyzés. Default: `none`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

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
