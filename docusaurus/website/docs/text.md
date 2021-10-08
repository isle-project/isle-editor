---
id: text 
title: Text
sidebar_label: Text
---

Text component, which allows rendering of raw text as Markdown and enables voice control.

## Options

* __raw__ | `string`: text to be rendered. Default: `''`.
* __className__ | `string`: class names. Default: `''`.
* __inline__ | `boolean`: controls whether to render the Markdown as inline text. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.


## Examples


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
