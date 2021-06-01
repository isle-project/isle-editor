---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Komponenta akordeonu ovládající svislé posuvníky.

## Možnosti

* __active__ | `number`: index posuvníku, který se má otevřít na začátku.. Default: `none`.
* __canCloseAll__ | `boolean`: zda lze sbalit všechna záhlaví. Default: `false`.
* __headers__ | `array<(string|node)>`: pole názvů záhlaví. Default: `none`.
* __headerStyle__ | `object`: lze také přiřadit styl proužkům záhlaví.. Default: `none`.
* __headerClassName__ | `string`: toto přepíše zadaný název třídy záhlaví. Default: `none`.
* __onChange__ | `function`: zpětné volání vyvolané s indexem nového aktivního vertikálního posuvníku. Default: `onChange() {}`.
* __className__ | `string`: název třídy pro vnější div. Default: `''`.
* __style__ | `object`: Řádkové styly CSS pro vnější div. Default: `none`.


## Příklady

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

