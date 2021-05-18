---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

一个动态背景组件，以指定的时间间隔循环浏览文本列表。

## 选项

* __text__ | `(string|array<string>)`: 文本或要显示的文本列表. Default: `[]`.
* __loop__ | `boolean`: 表示该过程是否要无限显示。. Default: `false`.
* __direction__ | `string`: 文本流的方向（可以是 "左"、"右"、"上"、"下"、"跟踪"、"焦点 "或 "旋涡"）。. Default: `'right'`.
* __hold__ | `number`: 静止时间(秒). Default: `5`.
* __wait__ | `number`: 新文本到达前的时间（秒）。. Default: `3`.
* __inTime__ | `number`: 入场时间(秒). Default: `1`.
* __outTime__ | `number`: 退场时间(秒). Default: `1`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: 文本的CSS样式. Default: `{}`.


## 例子


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'List of Texts', value: 'list' },
        { label: 'Background Image', value: 'backgroundImage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScrollingText
    text="This is a text re-appearing every five seconds"
    style={{ fontSize: 44, color: 'blue' }}
    wait={5}
    hold={2}
    loop
/>
```

</TabItem>

<TabItem value="list">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

<TabItem value="backgroundImage">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

</Tabs>
