---
id: r-help
title: R Help
sidebar_label: R Help
---

Få ord att ta fram R-dokumentation i ett modalt fönster när du klickar på dem.

## Alternativ

* __func__ | `string`: namnet på den `R-funktion` som dokumentationen ska öppnas för. Om den inte anges antas innehållet i `RHelp`-taggens innehåll vara lika med namnet på funktionen.. Default: `''`.
* __library__ | `string`: Namnet på det R-paket som funktionen finns i.. Default: `'base'`.
* __visible__ | `boolean`: kontrollerar om det modala fönstret för hjälp ska öppnas vid start.. Default: `false`.


## Exempel

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'From Library', value: 'otherLibrary' },
        { label: 'Visible on Startup', value: 'visible' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<span><RHelp>sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

<TabItem value="otherLibrary" >

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

</TabItem>

<TabItem value="visible" >

```jsx live
<span><RHelp visible={true} >sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

</Tabs>
