---
id: clock
title: Clock
sidebar_label: Clock
---

Компонент часов, отображающий текущее время.

## Варианты

* __duration__ | `boolean`: если установлено, то отображается продолжительность сеанса (а не фактическое время). Default: `false`.
* __format__ | `string`: формат времени (либо `HH:MM`, либо `HH:MM:SS`, либо `HH`). Default: `''`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

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

