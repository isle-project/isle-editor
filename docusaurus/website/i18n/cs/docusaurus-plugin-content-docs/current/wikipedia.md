---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Komponenta **Wikipedia** prohledá **Wikipedii** a vrátí záznam, pokud je pod zadaným vyhledávaným výrazem nalezeno něco platného.

## Možnosti

* __defaultEntry__ | `string`: výchozí položka pro zobrazení. Default: `none`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

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
