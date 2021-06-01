---
id: r-help
title: R Help
sidebar_label: R Help
---

Saa sanat avaamaan R-dokumentaation modaalisessa ikkunassa, kun niitä napsautetaan.

## Vaihtoehdot

* __func__ | `string`: sen `R-funktion` nimi, jonka dokumentaatio halutaan avata. Jos sitä ei anneta, `RHelp`-tunnisteen sisällön oletetaan olevan sama kuin funktion nimi.. Default: `''`.
* __library__ | `string`: sen R-paketin nimi, jossa funktio sijaitsee.. Default: `'base'`.
* __visible__ | `boolean`: ohjaa, avataanko ohjeikkuna käynnistyksen yhteydessä.. Default: `false`.


## Esimerkkejä

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
