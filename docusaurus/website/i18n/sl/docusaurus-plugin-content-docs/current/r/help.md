---
id: r-help
title: R Help
sidebar_label: R Help
---

Naredite, da besede ob kliku potegnejo dokumentacijo R v modalnem oknu.

## Možnosti

* __func__ | `string`: ime funkcije `R`, za katero želite odpreti dokumentacijo. Če ni navedena, se domneva, da je vsebina oznake `RHelp` enaka imenu funkcije. Default: `''`.
* __library__ | `string`: ime paketa R, v katerem se nahaja funkcija.. Default: `'base'`.
* __visible__ | `boolean`: nadzoruje, ali naj se modalno okno pomoči odpre ob zagonu.. Default: `false`.


## Primeri

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
