---
id: text 
title: Text
sidebar_label: Text
---

Textkomponent, som gör det möjligt att visa rå text som Markdown och möjliggör röststyrning.

## Alternativ

* __raw__ | `string`: Text som ska återges.. Default: `''`.
* __className__ | `string`: namn på klasser. Default: `''`.
* __inline__ | `boolean`: kontrollerar om Markdown ska återges som inline-text eller inte. Default: `false`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel


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
