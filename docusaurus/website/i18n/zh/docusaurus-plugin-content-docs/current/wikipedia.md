---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

**Wikipedia**组件扫描**Wikipedia**并返回一篇文章--如果在输入的搜索词下找到任何有效的文章。

## Options

* __defaultEntry__ | `string`: 默认显示的条目. Default: `none`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Entry', value: 'withEntry' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Wikipedia />
```

</TabItem>

<TabItem value="withEntry">

```jsx live
<Wikipedia defaultEntry="Angela Merkel" />
```

</TabItem>

</Tabs>
