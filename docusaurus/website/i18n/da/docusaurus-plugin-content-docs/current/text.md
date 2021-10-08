---
id: text 
title: Text
sidebar_label: Text
---

Tekstkomponent, som gør det muligt at gengive rå tekst som Markdown og giver mulighed for stemmestyring.

## Indstillinger

* __raw__ | `string`: tekst, der skal gengives. Default: `''`.
* __className__ | `string`: klassebetegnelser. Default: `''`.
* __inline__ | `boolean`: styrer, om Markdown skal gengives som inline-tekst. Default: `false`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler


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
