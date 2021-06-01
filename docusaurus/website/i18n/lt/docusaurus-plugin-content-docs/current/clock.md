---
id: clock
title: Clock
sidebar_label: Clock
---

Laikrodžio komponentas, rodantis dabartinį laiką.

## Parinktys

* __duration__ | `boolean`: jei nustatyta, rodoma sesijos trukmė (ne tikrasis laikas).. Default: `false`.
* __format__ | `string`: laiko formatas (`HH:MM`, `HH:MM:SS` arba `HH`).. Default: `''`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

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

