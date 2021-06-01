---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Függőleges csúszkákat vezérlő harmonika komponens.

## Opciók

* __active__ | `number`: az elején megnyitandó csúszka indexe. Default: `none`.
* __canCloseAll__ | `boolean`: össze lehet-e omlasztani az összes fejlécet. Default: `false`.
* __headers__ | `array<(string|node)>`: fejlécnevek tömbje. Default: `none`.
* __headerStyle__ | `object`: a fejlécekhez is hozzárendelhetünk egy stílust. Default: `none`.
* __headerClassName__ | `string`: ez felülbírálja a fejlécek megadott osztálynevét. Default: `none`.
* __onChange__ | `function`: az új aktív függőleges csúszka indexével hívott callback. Default: `onChange() {}`.
* __className__ | `string`: osztálynév a külső div-hez. Default: `''`.
* __style__ | `object`: CSS inline stílusok a külső div-hez. Default: `none`.


## Példák

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

