---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Il componente **Wikipedia** scansiona **Wikipedia** e restituisce un articolo - se viene trovato qualcosa di valido sotto il termine di ricerca inserito.

## Options

* __defaultEntry__ | `string`: voce predefinita da visualizzare. Default: `none`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Examples

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
