---
id: clock
title: Clock
sidebar_label: Clock
---

Pulksteņa komponents, kas parāda pašreizējo laiku.

## Iespējas

* __duration__ | `boolean`: ja iestatīts, tiek parādīts sesijas ilgums (nevis faktiskais laiks).. Default: `false`.
* __format__ | `string`: laika formāts (`HH:MM`, `HH:MM:SS` vai `HH`).. Default: `''`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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

