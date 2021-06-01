---
id: r-help
title: R Help
sidebar_label: R Help
---

Zajistěte, aby slova po kliknutí vytáhla dokumentaci R v modálním okně.

## Možnosti

* __func__ | `string`: název funkce `R`, ke které se má otevřít dokumentace. Pokud není uveden, předpokládá se, že obsah značky `RHelp` je roven názvu funkce.. Default: `''`.
* __library__ | `string`: název balíčku R, ve kterém se funkce nachází.. Default: `'base'`.
* __visible__ | `boolean`: řídí, zda se má při spuštění otevřít modální okno nápovědy.. Default: `false`.


## Příklady

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
