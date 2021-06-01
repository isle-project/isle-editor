---
id: r-help
title: R Help
sidebar_label: R Help
---

Zabezpečte, aby sa po kliknutí na slová vytiahla dokumentácia R v modálnom okne.

## Možnosti

* __func__ | `string`: názov funkcie `R`, ku ktorej sa má otvoriť dokumentácia. Ak nie je uvedený, predpokladá sa, že obsah značky `RHelp` sa rovná názvu funkcie. Default: `''`.
* __library__ | `string`: názov balíka R, v ktorom sa funkcia nachádza. Default: `'base'`.
* __visible__ | `boolean`: kontroluje, či sa má pri spustení otvoriť modálne okno nápovedy.. Default: `false`.


## Príklady

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
