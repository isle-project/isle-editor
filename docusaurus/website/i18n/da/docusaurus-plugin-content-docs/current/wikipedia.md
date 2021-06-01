---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

**Wikipedia**-komponenten scanner **Wikipedia** og returnerer en post, hvis der er fundet noget gyldigt under det indtastede søgeord.

## Indstillinger

* __defaultEntry__ | `string`: standardpost, der skal vises. Default: `none`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

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
