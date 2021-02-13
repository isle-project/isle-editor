---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

一个动态背景组件，以指定的时间间隔循环浏览文本列表。

## Options

* __text__ | `array<string>`: 文本或要显示的文本列表. Default: `[]`.
* __loop__ | `boolean`: 表示该过程是否要无限显示。. Default: `false`.
* __direction__ | `string`: 文本流的方向（可以是 "左"、"右"、"上"、"下"、"跟踪"、"焦点 "或 "旋涡"）。. Default: `'right'`.
* __hold__ | `number`: 静止时间(秒). Default: `5`.
* __wait__ | `number`: 新文本到达前的时间（秒）。. Default: `3`.
* __inTime__ | `number`: 入场时间(秒). Default: `1`.
* __outTime__ | `number`: 退场时间(秒). Default: `1`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: 文本的CSS样式. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Delay and Sound', value: 'delayAndSound' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Array of Strings', value: 'array' },
        { label: 'Humanized', value: 'humanized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Typewriter text="Lorem ipsum" />
```

</TabItem>

<TabItem value="delayAndSound">

```jsx live
<Typewriter text="Lorem ipsum" sound delay={2000} />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Typewriter text="Styled Text" style={{ fontSize: 66, color: 'red'}} />
```

</TabItem>

<TabItem value="array">

```jsx live
<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />
```

</TabItem>

<TabItem value="humanized">

```jsx live
<Typewriter text="This is a humanized performance" random interval={170} />
```

</TabItem>

</Tabs>



