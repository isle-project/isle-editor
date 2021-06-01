---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Akordeona komponents, kas kontrolē vertikālos slīdņus.

## Iespējas

* __active__ | `number`: sākumā atveramā slīdņa indekss. Default: `none`.
* __canCloseAll__ | `boolean`: vai var sabrūk visas galvenes. Default: `false`.
* __headers__ | `array<(string|node)>`: galvenes nosaukumu masīvs. Default: `none`.
* __headerStyle__ | `object`: var arī piešķirt stilu galvenes joslām.. Default: `none`.
* __headerClassName__ | `string`: tas aizstāj dotās klases nosaukumu galvenes.. Default: `none`.
* __onChange__ | `function`: izsaukts atpakaļsaukums ar jaunā aktīvā vertikālā slīdņa indeksu. Default: `onChange() {}`.
* __className__ | `string`: klases nosaukums ārējam div. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili ārējam div. Default: `none`.


## Piemēri

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

