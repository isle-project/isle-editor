---
id: weather 
title: Weather
sidebar_label: Weather
---

Un componente per la visualizzazione del tempo attuale in un luogo designato.

## Opzioni

* __location__ | `string`: nome della località. Default: `none`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi

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


