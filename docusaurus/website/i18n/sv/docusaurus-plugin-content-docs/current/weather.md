---
id: weather 
title: Weather
sidebar_label: Weather
---

En komponent för att visa det aktuella vädret på en bestämd plats.

## Alternativ

* __location__ | `string`: platsens namn. Default: `none`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Styling', value: 'withCSS' },
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Weather
    location="Pittsburgh"
/>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Weather
    location="Pittsburgh"
    style={{ fontFamily: 'Courier', background: 'orange' }}
/>
```

</TabItem>

</Tabs>


