---
id: text-area
title: Text Area
sidebar_label: Text Area
---

一个文本区域组件。作为一个独立的组件使用，更改应通过 "onChange "属性处理。

## 选项

* __defaultValue__ | `string`: 文本区域的默认值. Default: `''`.
* __value__ | `string`: 文本值. Default: `none`.
* __disabled__ | `boolean`: 控制是否禁用文本区域. Default: `false`.
* __legend__ | `(string|node)`: 图例文字. Default: `''`.
* __onBlur__ | `function`: 当文本区域失去焦点时调用的回调函数。. Default: `onBlur() {}`.
* __onChange__ | `function`: 当区域文本发生变化时，调用新文本的回调函数。. Default: `onChange() {}`.
* __placeholder__ | `string`: 占位符. Default: `none`.
* __resizable__ | `string`: 控制文本区域是否可以调整大小（可以是 "两者"、"水平"、"垂直 "或 "无"）。. Default: `'none'`.
* __rows__ | `number`: 行数. Default: `5`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```

</TabItem>

<TabItem value="customStyle">

<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
    style={{
        fontSize: 33,
        fontFamily: 'Georgia', 
        boxShadow: '0 0 4px black',
        background: 'rgb(238,174,202)', 
        background: 'radial-gradient(circle, rgba(255, 255, 0, 0.3) 44%, white 100%)' 
    }}
/>

</TabItem>

</Tabs>
