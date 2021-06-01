---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

**Vikipēdijas** komponents skenē **Vikipēdiju** un atgriež ierakstu, ja zem ievadītā meklēšanas termina ir atrasts kaut kas derīgs.

## Iespējas

* __defaultEntry__ | `string`: noklusējuma ieraksts, kas tiks parādīts. Default: `none`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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
