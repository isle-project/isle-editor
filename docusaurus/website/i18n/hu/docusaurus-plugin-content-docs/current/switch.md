---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

A Switch komponens lehetővé teszi egy elem megjelenítését egy több elemet tartalmazó listából. A felhasználók a Switch tag különböző gyermekei között az aktuálisan megjelenített elemre kattintva válogathatnak.

## Opciók

* __active__ | `boolean`: szabályozza, hogy a kapcsoló aktív-e vagy sem. Default: `true`.
* __tooltip__ | `string`: tooltip, amely megjelenik, ha a kapcsolóelem fölé mozgatjuk a gépet. Default: `none`.
* __tooltipPos__ | `string`: a tooltip elhelyezése (vagy `top`, `left`, `right`, vagy `bottom`). Default: `'top'`.
* __className__ | `string`: a körülvevő span elem osztályneve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChange__ | `function`: callback, amelyet az elemek váltásakor hívnak meg. Első argumentumként az aktuálisan megjelenített gyermek indexét kapja.. Default: `onChange() {}`.


## Példák

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Tooltip', value: 'withTooltip' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withTooltip">

```jsx live
<Switch tooltip="Just click and see" tooltipPos="left">
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<Switch  
  style={{ fontSize: 80, fontFamily: 'Open Sans Condensed'}} 
>
    <span>Some Clouds</span>
    <img src="https://bit.ly/3rLGE30" />
    <img src ="https://bit.ly/2OzxEj3" />
</Switch>
```

</TabItem>

</Tabs>
