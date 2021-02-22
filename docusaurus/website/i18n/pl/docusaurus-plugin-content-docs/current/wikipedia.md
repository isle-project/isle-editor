---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Komponent **Wikipedia** skanuje **Wikipedię** i zwraca artykuł - jeśli pod wprowadzonym terminem wyszukiwania znaleziono coś ważnego.

## Opcje

* __defaultEntry__ | `string`: domyślna pozycja do wyświetlenia. Default: `none`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

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
