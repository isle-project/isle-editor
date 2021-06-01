---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Компонентът **Wikipedia** сканира **Wikipedia** и връща запис, ако е намерено нещо валидно под въведената дума за търсене.

## Опции

* __defaultEntry__ | `string`: запис по подразбиране за показване. Default: `none`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

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
