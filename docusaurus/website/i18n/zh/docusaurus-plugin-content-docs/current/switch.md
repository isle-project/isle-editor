---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Switch组件允许显示多个元素列表中的一个元素。用户可以通过点击当前显示的Switch标签的不同子元素来循环浏览。

## Options

* __active__ | `boolean`: 控制开关是否处于活动状态. Default: `true`.
* __tooltip__ | `string`: 当鼠标悬停在开关元素上时显示的工具提示。. Default: `none`.
* __tooltipPos__ | `string`: 工具提示的位置（"顶部"、"左侧"、"右侧 "或 "底部"）。. Default: `'top'`.
* __className__ | `string`: 外围跨度元素的类名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 当元素被切换时调用的回调。接收当前显示的子元素的索引作为第一个参数。. Default: `onChange() {}`.


## Examples

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```



