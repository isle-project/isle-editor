---
id: clock
title: Clock
sidebar_label: Clock
---

Komponenta hodin zobrazující aktuální čas.

## Možnosti

* __duration__ | `boolean`: pokud je nastaveno, zobrazí se doba trvání relace (ne skutečný čas).. Default: `false`.
* __format__ | `string`: formát času (buď `HH:MM`, `HH:MM:SS`, nebo `HH`).. Default: `''`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

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

