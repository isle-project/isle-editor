---
id: weather 
title: Weather
sidebar_label: Weather
---

Komponentas, skirtas rodyti dabartinius orus nurodytoje vietoje.

## Parinktys

* __location__ | `string`: vietovės pavadinimas. Default: `none`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

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


