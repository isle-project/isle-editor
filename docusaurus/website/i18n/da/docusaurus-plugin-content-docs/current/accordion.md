---
id: accordion
title: Accordion
sidebar_label: Accordion
---

En harmonikakomponent, der styrer lodrette skydere.

## Indstillinger

* __active__ | `number`: indeks for den skyder, der skal åbnes i begyndelsen. Default: `none`.
* __canCloseAll__ | `boolean`: om man kan lukke alle overskrifter sammen. Default: `false`.
* __headers__ | `array<(string|node)>`: array af navne på overskrifter. Default: `none`.
* __headerStyle__ | `object`: man kan også tildele en stil til overskriftslinjerne. Default: `none`.
* __headerClassName__ | `string`: dette tilsidesætter det angivne klasse navn på headers. Default: `none`.
* __onChange__ | `function`: callback påkaldt med indekset for den nye aktive lodrette skyder. Default: `onChange() {}`.
* __className__ | `string`: klassens navn for det ydre div. Default: `''`.
* __style__ | `object`: CSS inline-stilarter for ydre div. Default: `none`.


## Eksempler

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

