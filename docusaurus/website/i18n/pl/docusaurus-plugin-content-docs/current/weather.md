---
id: weather 
title: Weather
sidebar_label: Weather
---

Komponent do wyświetlania aktualnej pogody w wyznaczonym miejscu.

## Opcje

* __location__ | `string`: nazwa lokalizacji. Default: `none`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

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


