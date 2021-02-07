---
id: pages 
title: Pages
sidebar_label: Pages
---

一个ISLE分页组件，它允许用户在一个页面序列中分步。

## Options

* __activePage__ | `number`: 活动页. Default: `1`.
* __disabled__ | `boolean`: 控制导航栏是否处于活动状态. Default: `false`.
* __title__ | `string`: 页面容器的显示标题. Default: `''`.
* __pagination__ | `string`: 是否在 "顶部"、"底部 "或 "两者 "显示分页。. Default: `'top'`.
* __size__ | `string`: 分页按钮的大小（可以是 "默认"、"lg"、"大"、"sm"、"小"、"xs "或 "xsmall"）。. Default: `'default'`.
* __height__ | `(number|string)`: 容器的最大高度。如果嵌入式页面较高，则会添加一个垂直滚动条。. Default: `none`.
* __voiceID__ | `string`: 声控识别器. Default: `none`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onSelect__ | `function`: 主动变更时调用的函数。接收新的活动页面索引作为唯一参数。. Default: `onSelect() {}`.


## Examples

```jsx live
<Pages title="Pages">
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
        <RShell />
    </div>
</Pages>
``` 



