---
id: text 
title: Text
sidebar_label: Text
---

Text komponens, amely lehetővé teszi a nyers szöveg Markdownként való megjelenítését és a hangvezérlést.

## Opciók

* __raw__ | `string`: megjelenítendő szöveg. Default: `''`.
* __className__ | `string`: osztálynevek. Default: `''`.
* __inline__ | `boolean`: szabályozza, hogy a Markdown-t soron belüli szövegként jelenítse-e meg. Default: `false`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák


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
