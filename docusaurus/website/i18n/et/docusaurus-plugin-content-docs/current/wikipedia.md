---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Komponent **Wikipedia** otsib **Wikipedia** ja tagastab kirje, kui sisestatud otsingusõna all leidub midagi kehtivat.

## Valikud

* __defaultEntry__ | `string`: vaikimisi kanne kuvamiseks. Default: `none`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

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
