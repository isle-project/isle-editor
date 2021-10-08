---
id: weather 
title: Weather
sidebar_label: Weather
---

Composant permettant d'afficher le temps actuel à un endroit désigné.

## Options

* __location__ | `string`: nom du lieu. Default: `none`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples

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


