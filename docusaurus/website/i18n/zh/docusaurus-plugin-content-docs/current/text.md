---
id: text 
title: Text
sidebar_label: Text
---

文本组件，它允许将原始文本渲染为Markdown，并实现语音控制。

## 选项

* __raw__ | `string`: 待发文字. Default: `''`.
* __className__ | `string`: 班名. Default: `''`.
* __inline__ | `boolean`: 控制是否将Markdown渲染为内联文本。. Default: `false`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Multi-line', value: 'multiLine' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Text>*Markdown* formatted text comes here...</Text>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<Text style={{ color: 'orange', fontSize: 70}}>
*Markdown* formatted text comes here...</Text>
```
</TabItem>

<TabItem value="multiLine">

```jsx live
<Text raw={`
1. Text raw works for multi-line text
2. *second line*
3. **third line**
`} />
```
</TabItem>

</Tabs>
