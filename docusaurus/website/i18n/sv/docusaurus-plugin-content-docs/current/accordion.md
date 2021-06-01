---
id: accordion
title: Accordion
sidebar_label: Accordion
---

En dragspelskomponent som styr vertikala reglage.

## Alternativ

* __active__ | `number`: index för den glidare som ska öppnas i början. Default: `none`.
* __canCloseAll__ | `boolean`: om man kan sammanfoga alla rubriker. Default: `false`.
* __headers__ | `array<(string|node)>`: en array med namn på rubriker. Default: `none`.
* __headerStyle__ | `object`: Man kan också tilldela en stil till rubrikerna.. Default: `none`.
* __headerClassName__ | `string`: Detta åsidosätter det givna klassnamnet för rubrikerna.. Default: `none`.
* __onChange__ | `function`: callback som anropas med index för det nya aktiva vertikala reglaget. Default: `onChange() {}`.
* __className__ | `string`: klassnamn för den yttre div:en. Default: `''`.
* __style__ | `object`: CSS inline-stilar för yttre div. Default: `none`.


## Exempel

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

