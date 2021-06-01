---
id: accordion
title: Accordion
sidebar_label: Accordion
---

O componentă acordeon care controlează cursoarele verticale.

## Opțiuni

* __active__ | `number`: indexul cursorului care trebuie deschis la început. Default: `none`.
* __canCloseAll__ | `boolean`: dacă se pot prăbuși toate anteturile. Default: `false`.
* __headers__ | `array<(string|node)>`: matrice de nume de antet. Default: `none`.
* __headerStyle__ | `object`: se poate, de asemenea, atribui un stil barelor de antet. Default: `none`.
* __headerClassName__ | `string`: acest lucru înlocuiește numele clasei date de anteturi.. Default: `none`.
* __onChange__ | `function`: callback invocat cu indexul noului cursor vertical activ. Default: `onChange() {}`.
* __className__ | `string`: numele clasei pentru div-ul exterior. Default: `''`.
* __style__ | `object`: Stiluri CSS inline pentru div-ul exterior. Default: `none`.


## Exemple

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

