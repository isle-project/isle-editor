---
id: clock
title: Clock
sidebar_label: Clock
---

Компонент на часовника, показващ текущото време.

## Опции

* __duration__ | `boolean`: ако е зададено, се показва продължителността на сесията (а не действителното време). Default: `false`.
* __format__ | `string`: формат на времето (или `HH:MM`, `HH:MM:SS`, или `HH`). Default: `''`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

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

