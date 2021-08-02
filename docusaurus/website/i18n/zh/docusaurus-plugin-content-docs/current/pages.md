---
id: pages 
title: Pages
sidebar_label: Pages
---

一个ISLE分页组件，它允许用户在一个页面序列中分步。

## 选项

* __activePage__ | `number`: 活动页. Default: `1`.
* __disabled__ | `boolean`: 控制导航栏是否处于活动状态. Default: `false`.
* __title__ | `(string|node)`: 页面容器的显示标题. Default: `''`.
* __pagination__ | `string`: 是否在 "顶部"、"底部 "或 "两者 "显示分页。. Default: `'top'`.
* __size__ | `string`: 分页按钮的大小（可以是 "default"、"lg "或 "sm"）。. Default: `'default'`.
* __height__ | `(number|string)`: 容器的最大高度。如果嵌入式页面较高，则会添加一个垂直滚动条。. Default: `none`.
* __voiceID__ | `string`: 声控识别器. Default: `none`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onSelect__ | `function`: 主动变更时调用的函数。接收新的活动页面索引作为唯一参数。. Default: `onSelect() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Pagination', value: 'customPagination' },
        { label: 'With CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Pages title="Pages" >
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

<TabItem value="customPagination" >

```jsx live
<Pages title="Questions" pagination="both" size="sm" >
    <div>
        <NumberQuestion
            question="What is the number PI (at least up to three digits after the decimal point)?"
            solution={Math.PI}
            digits={3}
        />
    </div>
    <div>
        <FreeTextQuestion 
            question="Is this question displayed on the second page?"
            solution="Yes" 
        />
    </div>
</Pages>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<Pages 
    activePage={2}
    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} 
    title="Styled Pages"
>
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

</Tabs>

