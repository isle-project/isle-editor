---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Element akordeonowy sterujący suwakami pionowymi.

## Options

* __active__ | `number`: indeks suwaka, który ma być otwarty na początku. Default: `none`.
* __canCloseAll__ | `boolean`: czy można zawalić wszystkie nagłówki. Default: `false`.
* __headers__ | `array<(string|node)>`: szereg nazw nagłówków. Default: `none`.
* __headerStyle__ | `object`: do nagłówków można również przypisać styl. Default: `none`.
* __headerClassName__ | `string`: to unieważnia daną nazwę klasy nagłówków. Default: `none`.
* __onChange__ | `function`: wywołanie zwrotne z indeksem nowego aktywnego suwaka pionowego. Default: `onChange() {}`.
* __className__ | `string`: nazwa klasy dla działu zewnętrznego. Default: `''`.
* __style__ | `object`: Style CSS w linii dla zewnętrznego podziału. Default: `none`.


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

