---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Die Komponente **Wikipedia** durchsucht die **Wikipedia** und gibt einen Artikel zurück - wenn unter dem eingegebenen Suchbegriff etwas Gültiges gefunden wird.

## Optionen

* __defaultEntry__ | `string`: Standardeintrag zur Anzeige. Default: `none`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Beispiele

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
