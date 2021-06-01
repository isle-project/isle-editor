---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Komponenten **Wikipedia** genomsöker **Wikipedia** och returnerar en post om något giltigt hittas under den angivna söktermen.

## Alternativ

* __defaultEntry__ | `string`: standardpost som ska visas. Default: `none`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

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
