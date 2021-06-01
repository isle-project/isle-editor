---
id: clock
title: Clock
sidebar_label: Clock
---

Az aktuális időt megjelenítő óra komponens.

## Opciók

* __duration__ | `boolean`: ha be van állítva, a munkamenet időtartama jelenik meg (nem a tényleges idő).. Default: `false`.
* __format__ | `string`: időformátum (`H:MM`, `H:MM:SS` vagy `HHH`). Default: `''`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

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

