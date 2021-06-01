---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Komponent **Wikipedia** prehľadá **Wikipédiu** a vráti záznam, ak sa pod zadaným hľadaným výrazom nájde niečo platné.

## Možnosti

* __defaultEntry__ | `string`: predvolená položka na zobrazenie. Default: `none`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

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
