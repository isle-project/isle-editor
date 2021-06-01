---
id: clock
title: Clock
sidebar_label: Clock
---

Kellakomponent, mis näitab praegust kellaaega.

## Valikud

* __duration__ | `boolean`: kui see on määratud, kuvatakse seansi kestus (mitte tegelik aeg).. Default: `false`.
* __format__ | `string`: aja formaat (kas `H:MM`, `H:MM:SS` või `HHH`). Default: `''`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

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

