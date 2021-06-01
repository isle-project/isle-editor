---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Komponenta harmonike, ki nadzoruje navpične drsnike.

## Možnosti

* __active__ | `number`: indeks drsnika, ki se odpre na začetku. Default: `none`.
* __canCloseAll__ | `boolean`: ali je mogoče zbiti vse glave. Default: `false`.
* __headers__ | `array<(string|node)>`: polje imen glave. Default: `none`.
* __headerStyle__ | `object`: slog lahko dodelite tudi vrsticam v glavi. Default: `none`.
* __headerClassName__ | `string`: to razveljavi dano ime razreda glave. Default: `none`.
* __onChange__ | `function`: povratni klic z indeksom novega aktivnega navpičnega drsnika. Default: `onChange() {}`.
* __className__ | `string`: ime razreda za zunanji div. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS za zunanji div. Default: `none`.


## Primeri

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

