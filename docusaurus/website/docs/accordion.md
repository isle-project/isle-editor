---
id: accordion
title: Accordion
sidebar_label: Accordion
---

An accordion component controlling vertical sliders.

## Options

* __active__ | `number`: index of slider to be opened at the beginning. Default: `none`.
* __canCloseAll__ | `boolean`: whether one can collapse all headers. Default: `false`.
* __headers__ | `array<(string|node)>`: array of header names. Default: `none`.
* __headerStyle__ | `object`: one may also assign a style to the header bars. Default: `none`.
* __headerClassName__ | `string`: this overrules the given class name of the headers. Default: `none`.
* __onChange__ | `function`: callback invoked with index of new active vertical slider. Default: `onChange() {}`.
* __className__ | `string`: class name for outer div. Default: `''`.
* __style__ | `object`: CSS inline styles for outer div. Default: `none`.


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

