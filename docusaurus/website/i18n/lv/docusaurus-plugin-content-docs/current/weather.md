---
id: weather 
title: Weather
sidebar_label: Weather
---

Sastāvdaļa, kas paredzēta, lai parādītu pašreizējos laikapstākļus noteiktā vietā.

## Iespējas

* __location__ | `string`: atrašanās vietas nosaukums. Default: `none`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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


