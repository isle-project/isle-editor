---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Een accordeoncomponent die de verticale schuifregelaars regelt.

## Options

* __active__ | `number`: index van de schuifregelaar die aan het begin moet worden geopend. Default: `none`.
* __canCloseAll__ | `boolean`: of men alle koppen kan laten instorten. Default: `false`.
* __headers__ | `array<(string|node)>`: reeks van header-namen. Default: `none`.
* __headerStyle__ | `object`: men kan ook een stijl toewijzen aan de kopbalken. Default: `none`.
* __headerClassName__ | `string`: dit overstemt de gegeven klassennaam van de kopteksten. Default: `none`.
* __onChange__ | `function`: callback ingeroepen met index van nieuwe actieve verticale schuifregelaar. Default: `onChange() {}`.
* __className__ | `string`: klasse-naam voor buitenste div. Default: `''`.
* __style__ | `object`: CSS inline stijlen voor buitenste div. Default: `none`.


## Examples

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

