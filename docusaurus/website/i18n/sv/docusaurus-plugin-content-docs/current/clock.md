---
id: clock
title: Clock
sidebar_label: Clock
---

Klockkomponent som visar den aktuella tiden.

## Alternativ

* __duration__ | `boolean`: Om den är inställd visas sessionens längd (inte den faktiska tiden).. Default: `false`.
* __format__ | `string`: tidsformat (antingen `HHH:MM`, `HHH:MM:SS` eller `HHH`).. Default: `''`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

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

