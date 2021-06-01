---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Akordioni komponent, mis kontrollib vertikaalseid liugureid.

## Valikud

* __active__ | `number`: alguses avatava liuguri indeks. Default: `none`.
* __canCloseAll__ | `boolean`: kas kõiki pealkirju saab kokku lükata. Default: `false`.
* __headers__ | `array<(string|node)>`: päise nimede massiivi. Default: `none`.
* __headerStyle__ | `object`: võib määrata stiili ka päisribadele. Default: `none`.
* __headerClassName__ | `string`: see tühistab antud klassi nime päise puhul.. Default: `none`.
* __onChange__ | `function`: callback, mida kutsutakse üles uue aktiivse vertikaalse liuguri indeksiga. Default: `onChange() {}`.
* __className__ | `string`: klassi nimi välimise div jaoks. Default: `''`.
* __style__ | `object`: CSS inline stiilid välise div jaoks. Default: `none`.


## Näited

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

