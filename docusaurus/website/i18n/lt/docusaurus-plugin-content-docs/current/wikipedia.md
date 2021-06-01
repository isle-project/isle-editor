---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

**Vikipedijos** komponentas nuskaito **Vikipediją** ir grąžina įrašą, jei pagal įvestą paieškos žodį randama kas nors galiojančio.

## Parinktys

* __defaultEntry__ | `string`: rodomas numatytasis įrašas. Default: `none`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

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
