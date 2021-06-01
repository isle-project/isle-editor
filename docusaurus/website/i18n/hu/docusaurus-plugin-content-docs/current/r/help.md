---
id: r-help
title: R Help
sidebar_label: R Help
---

A szavakra kattintva az R dokumentáció egy modális ablakban jelenjen meg.

## Opciók

* __func__ | `string`: annak az `R függvénynek` a neve, amelynek a dokumentációját meg kell nyitni. Ha nincs megadva, akkor az `RHelp` tag tartalmát a függvény nevével megegyezőnek kell tekinteni.. Default: `''`.
* __library__ | `string`: annak az R csomagnak a neve, amelyben a függvény található. Default: `'base'`.
* __visible__ | `boolean`: szabályozza, hogy a súgó modális ablak megnyíljon-e indításkor.. Default: `false`.


## Példák

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
