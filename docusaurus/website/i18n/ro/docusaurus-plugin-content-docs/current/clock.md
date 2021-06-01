---
id: clock
title: Clock
sidebar_label: Clock
---

Componenta ceas care afișează ora curentă.

## Opțiuni

* __duration__ | `boolean`: dacă este setat, se afișează durata sesiunii (nu timpul real). Default: `false`.
* __format__ | `string`: formatul orei (fie `HH:MM`, `HH:MM:SS`, sau `HH`). Default: `''`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

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

