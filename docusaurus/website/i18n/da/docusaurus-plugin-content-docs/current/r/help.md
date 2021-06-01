---
id: r-help
title: R Help
sidebar_label: R Help
---

Få ord til at trække R-dokumentation op i et modalvindue, når der klikkes på dem.

## Indstillinger

* __func__ | `string`: navnet på den `R-funktion`, som dokumentationen skal åbnes for. Hvis den ikke er angivet, antages indholdet af `RHelp`-tagget at være lig med navnet på funktionen. Default: `''`.
* __library__ | `string`: navnet på den R-pakke, som funktionen findes i. Default: `'base'`.
* __visible__ | `boolean`: styrer, om det modale vindue for hjælp skal åbnes ved opstart. Default: `false`.


## Eksempler

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
