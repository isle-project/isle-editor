---
id: text 
title: Text
sidebar_label: Text
---

Teksti-komponentti, joka mahdollistaa raakatekstin renderöinnin Markdown-muotoon ja ääniohjauksen.

## Vaihtoehdot

* __raw__ | `string`: renderöitävä teksti. Default: `''`.
* __className__ | `string`: luokkien nimet. Default: `''`.
* __inline__ | `boolean`: valvoo, näytetäänkö Markdown tekstinä rivissä.. Default: `false`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä


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
