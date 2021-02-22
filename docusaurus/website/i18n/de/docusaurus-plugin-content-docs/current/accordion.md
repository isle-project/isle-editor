---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Eine Akkordeon-Komponente, die vertikale Schieberegler steuert.

## Optionen

* __active__ | `number`: Index des anfangs zu öffnenden Schiebers. Default: `none`.
* __canCloseAll__ | `boolean`: ob man alle Kopfzeilen einklappen kann. Default: `false`.
* __headers__ | `array<(string|node)>`: Array von Kopfzeilennamen. Default: `none`.
* __headerStyle__ | `object`: Man kann den Kopfleisten auch einen Stil zuweisen. Default: `none`.
* __headerClassName__ | `string`: dies überschreibt den angegebenen Klassennamen der Header. Default: `none`.
* __onChange__ | `function`: Callback, der mit dem Index des neuen aktiven vertikalen Schiebereglers aufgerufen wird. Default: `onChange() {}`.
* __className__ | `string`: Klassenname für äußeres div. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile für äußeres div. Default: `none`.


## Beispiele

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

