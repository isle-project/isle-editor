---
id: r-help
title: R Help
sidebar_label: R Help
---

Padarykite taip, kad paspaudus žodžius modaliniame lange būtų ištraukiama R dokumentacija.

## Parinktys

* __func__ | `string`: `R funkcijos, kurios dokumentaciją reikia atverti, pavadinimas. Jei nepateikiama, laikoma, kad `RHelp` žymės turinys yra lygus funkcijos pavadinimui. Default: `''`.
* __library__ | `string`: R paketo, kuriame yra funkcija, pavadinimas.. Default: `'base'`.
* __visible__ | `boolean`: kontroliuoja, ar paleidimo metu turi būti atidarytas pagalbos modalinis langas.. Default: `false`.


## Pavyzdžiai

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
