---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Компонент аккордеона, управляющий вертикальными ползунами.

## Варианты

* __active__ | `number`: индекс ползунка, который должен быть открыт в начале. Default: `none`.
* __canCloseAll__ | `boolean`: можно ли сбить все заголовки. Default: `false`.
* __headers__ | `array<(string|node)>`: массив названий заголовков. Default: `none`.
* __headerStyle__ | `object`: можно также присвоить стиль заголовочным полоскам. Default: `none`.
* __headerClassName__ | `string`: это отменяет название данного класса заголовков. Default: `none`.
* __onChange__ | `function`: вызов обратного вызова с индексом нового активного вертикального ползунка. Default: `onChange() {}`.
* __className__ | `string`: название класса для outer div. Default: `''`.
* __style__ | `object`: CSS встраиваемые стили для наружных погружений. Default: `none`.


## Примеры

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

