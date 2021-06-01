---
id: clock
title: Clock
sidebar_label: Clock
---

Urkomponent, der viser det aktuelle klokkeslæt.

## Indstillinger

* __duration__ | `boolean`: hvis indstillet, vises sessionens varighed (ikke den faktiske tid). Default: `false`.
* __format__ | `string`: tidsformat (enten `HHH:MM`, `HHH:MM:SS`, eller `HHH`). Default: `''`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

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

