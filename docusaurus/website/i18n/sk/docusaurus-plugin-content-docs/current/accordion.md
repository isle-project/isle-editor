---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Komponent akordeónu ovládajúci vertikálne posuvníky.

## Možnosti

* __active__ | `number`: index posuvníka, ktorý sa má otvoriť na začiatku. Default: `none`.
* __canCloseAll__ | `boolean`: či je možné zložiť všetky hlavičky. Default: `false`.
* __headers__ | `array<(string|node)>`: pole názvov hlavičiek. Default: `none`.
* __headerStyle__ | `object`: je možné priradiť štýl aj lištám záhlavia. Default: `none`.
* __headerClassName__ | `string`: toto prepíše daný názov triedy hlavičiek. Default: `none`.
* __onChange__ | `function`: spätné volanie vyvolané s indexom nového aktívneho vertikálneho posuvníka. Default: `onChange() {}`.
* __className__ | `string`: názov triedy pre vonkajší div. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS pre vonkajší div. Default: `none`.


## Príklady

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

