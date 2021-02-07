---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Le composant **Wikipedia** scanne le **Wikipedia** et renvoie un article - si un élément valide est trouvé sous le terme de recherche saisi.

## Options

* __defaultEntry__ | `string`: entrée par défaut à afficher. Default: `none`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


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
