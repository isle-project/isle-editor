---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Komponenta **Wikipedia** pregleda **Wikipedijo** in vrne vnos, če je pod vnesenim iskalnim izrazom najdeno kaj veljavnega.

## Možnosti

* __defaultEntry__ | `string`: privzeti vnos za prikaz. Default: `none`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

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
