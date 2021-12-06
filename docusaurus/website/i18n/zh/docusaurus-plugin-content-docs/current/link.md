---
id: link
title: Link
sidebar_label: Link
---

一个用于显示链接的组件。

## 选项

* __href__ | `string (required)`: 链接到的网站URL. Default: `none`.
* __target__ | `string`: 定义打开链接的位置：设置为`_blank`代表新窗口，`_self`代表自己的框架，`_parent`代表上级，`_top`代表窗口的主体，或者框架的名称。. Default: `'_blank'`.
* __windowFeatures__ | `string`: 逗号分隔的窗口特征列表，用于链接在新窗口中打开时（见：https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features）。. Default: `none`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'New Page', value: 'newPage' },
        { label: 'Image Link', value: 'imageLink' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

</TabItem>

<TabItem value="newPage">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">New Wikipedia Page</Link>
```
</TabItem>

<TabItem value="imageLink">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">
<img src= "https://bit.ly/3aM4OU7" /></Link>
```

</TabItem>

</Tabs>
