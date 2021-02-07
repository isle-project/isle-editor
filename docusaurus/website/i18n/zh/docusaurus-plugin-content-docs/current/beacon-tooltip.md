---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

在课程中放置一个信标的组件，可以是独立的，也可以是附加在一个 "目标 "上的。当鼠标悬停或点击信标时，会显示一个工具提示。

## Options

* __title__ | `(string|node)`: 标题要显示在工具提示的顶部。. Default: `none`.
* __content__ | `(string|node)`: 工具提示内容. Default: `'`content` comes here...'`.
* __event__ | `string`: 如果设置为 "点击"，当点击信标时，工具提示被切换；如果设置为 "悬停"，通过悬停激活工具提示。. Default: `'click'`.
* __placement__ | `string`: 工具提示相对于 "target "的位置(可以是 "top"、"top-start"、"top-end"、"bottom"、"bottom-end"、"left"、"left-start"、"left-end"、"right"、"right-start"、"right-end"、"auto "或 "center"). Default: `'left'`.
* __target__ | `string`: 类或ID选择器，用于附加工具提示的元素。. Default: `''`.
* __offset__ | `number`: 工具提示与 "目标 "之间的距离，单位为像素。. Default: `15`.
* __onChange__ | `function`: 工具提示状态改变时调用的回调。接收两个参数："action"（"open "或 "close"）和传递的 "props"。. Default: `onChange() {}`.


## Examples

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



