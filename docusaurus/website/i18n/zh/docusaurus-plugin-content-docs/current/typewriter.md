---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

一个ISLE组件，允许你创建一个打字机效果。

## Options

* __delay__ | `number`: 初始延时. Default: `none`.
* __hold__ | `number`: 如果文本是一个字符串数组，则保持指定的完整显示持续时间，然后再传递到数组中的下一个项目。. Default: `2000`.
* __interval__ | `number`: 打字机的时间间隔(毫秒). Default: `100`.
* __random__ | `boolean`: 如果设置了随机，则按键将以一定的、"人性化 "的随机性进行。. Default: `false`.
* __sound__ | `boolean`: 敲击声. Default: `false`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __text__ | `(string|array<string>)`: 要显示的全文. Default: `''`.


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

