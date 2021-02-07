---
id: clock
title: Clock
sidebar_label: Clock
---

Uhrenkomponente, die die aktuelle Zeit anzeigt.

## Options

* __duration__ | `boolean`: wenn gesetzt, wird die Dauer der Sitzung angezeigt (nicht die tatsächliche Zeit). Default: `false`.
* __format__ | `string`: Zeitformat (entweder `HH:MM`, `HH:MM:SS`, oder `HH`). Default: `''`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Examples


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

