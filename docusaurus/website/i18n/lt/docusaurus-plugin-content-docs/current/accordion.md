---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Akordeono komponentas, valdantis vertikalius šliaužiklius.

## Parinktys

* __active__ | `number`: pradžioje atidaromo slankiklio indeksas. Default: `none`.
* __canCloseAll__ | `boolean`: ar galima suvesti visas antraštes. Default: `false`.
* __headers__ | `array<(string|node)>`: antraštės pavadinimų masyvas. Default: `none`.
* __headerStyle__ | `object`: taip pat galima priskirti stilių antraštės juostoms. Default: `none`.
* __headerClassName__ | `string`: tai pakeičia duotą antraštės klasės pavadinimą. Default: `none`.
* __onChange__ | `function`: iškviečiamas grįžtamasis skambutis su naujojo aktyvaus vertikalaus slankiklio indeksu. Default: `onChange() {}`.
* __className__ | `string`: išorinio div klasės pavadinimas. Default: `''`.
* __style__ | `object`: "CSS" įvesties stiliai išoriniam divui. Default: `none`.


## Pavyzdžiai

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

