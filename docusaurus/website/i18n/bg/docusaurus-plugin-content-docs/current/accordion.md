---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Компонент на акордеон, управляващ вертикални плъзгачи.

## Опции

* __active__ | `number`: индекс на плъзгача, който ще се отвори в началото. Default: `none`.
* __canCloseAll__ | `boolean`: дали може да се сгънат всички заглавия. Default: `false`.
* __headers__ | `array<(string|node)>`: масив от имена на заглавия. Default: `none`.
* __headerStyle__ | `object`: можете също така да зададете стил на лентите на заглавието. Default: `none`.
* __headerClassName__ | `string`: това отменя даденото име на класа на заглавията. Default: `none`.
* __onChange__ | `function`: обратна връзка, извикана с индекса на новия активен вертикален плъзгач. Default: `onChange() {}`.
* __className__ | `string`: име на класа за външния div. Default: `''`.
* __style__ | `object`: CSS инлайн стилове за външния div. Default: `none`.


## Примери

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

