---
id: r-help
title: R Help
sidebar_label: R Help
---

Направете така, че думите да изтеглят документацията на R в модален прозорец при щракване.

## Опции

* __func__ | `string`: име на `R функцията`, за която да се отвори документацията. Ако не е подаден, съдържанието на тага `RHelp` се приема за равно на името на функцията. Default: `''`.
* __library__ | `string`: име на пакета R, в който се намира функцията. Default: `'base'`.
* __visible__ | `boolean`: контролира дали модалният прозорец за помощ да се отваря при стартиране.. Default: `false`.


## Примери

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
