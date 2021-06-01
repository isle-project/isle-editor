---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Pystysuoria liukusäätimiä ohjaava harmonikkakomponentti.

## Vaihtoehdot

* __active__ | `number`: alussa avattavan liukusäätimen indeksi. Default: `none`.
* __canCloseAll__ | `boolean`: voidaanko kaikki otsikot sulkea. Default: `false`.
* __headers__ | `array<(string|node)>`: joukko otsikon nimiä. Default: `none`.
* __headerStyle__ | `object`: voidaan myös määrittää tyyli otsikkopalkkeihin.. Default: `none`.
* __headerClassName__ | `string`: tämä ohittaa otsikoiden annetun luokan nimen.. Default: `none`.
* __onChange__ | `function`: callback, jota kutsutaan uuden aktiivisen pystysuoran liukusäätimen indeksillä. Default: `onChange() {}`.
* __className__ | `string`: luokan nimi ulommalle div:lle. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit ulommalle div:lle. Default: `none`.


## Esimerkkejä

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="firstOpened"
    values={[
        { label: 'First item opened', value: 'firstOpened' },
        { label: 'All items can close', value: 'allClosed' },
    ]}
    lazy
>
<TabItem value="firstOpened">

```jsx live
<Accordion headers={[ 'First Question', 'Second Question' ]} active={0} >
    <FreeTextQuestion />
    <FreeTextQuestion />
</Accordion>
```

</TabItem>
<TabItem value="allClosed">

```jsx live
<Accordion headers={[ 'First Question', 'Second Question' ]} canCloseAll >
    <FreeTextQuestion />
    <FreeTextQuestion />
</Accordion>
```

</TabItem>
</Tabs>

