---
id: accordion
title: Accordion
sidebar_label: Accordion
---

一个控制垂直滑块的手风琴组件。

## Options

* __active__ | `number`: 开头的滑块指数. Default: `none`.
* __canCloseAll__ | `boolean`: 是否可以折叠所有的标题. Default: `false`.
* __headers__ | `array<(string|node)>`: 头名数组. Default: `none`.
* __headerStyle__ | `object`: 也可以给头条指定一个样式。. Default: `none`.
* __headerClassName__ | `string`: 这将覆盖给定的标题类名称. Default: `none`.
* __onChange__ | `function`: 用新的活动垂直滑块的索引调用回调。. Default: `onChange() {}`.
* __className__ | `string`: 外号. Default: `''`.
* __style__ | `object`: 外层div的CSS内联样式. Default: `none`.


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

