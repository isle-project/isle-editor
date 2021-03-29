---
id: r-help
title: R Help
sidebar_label: R Help
---

Сделайте слова подтягивать R документацию в модальном окне при нажатии.

## Варианты

* __func__ | `string`: название функции `R`, для которой открывается документация. Если он не предоставлен, содержимое тега `RHelp` предполагается равным имени функции. Default: `''`.
* __library__ | `string`: название пакета R, в котором находится функция. Default: `'base'`.
* __visible__ | `boolean`: управляет тем, нужно ли открывать окно модельной справки при запуске. Default: `false`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'From Library', value: 'otherLibrary' },
        { label: 'Visible on Startup', value: 'visible' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<span><RHelp>sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

<TabItem value="otherLibrary" >

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

</TabItem>

<TabItem value="visible" >

```jsx live
<span><RHelp visible={true} >sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

</Tabs>
