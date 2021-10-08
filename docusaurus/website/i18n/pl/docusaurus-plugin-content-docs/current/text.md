---
id: text 
title: Text
sidebar_label: Text
---

Komponent tekstowy, który pozwala na renderowanie surowego tekstu jako Markdown i umożliwia sterowanie głosowe.

## Opcje

* __raw__ | `string`: tekst, który ma zostać przedstawiony. Default: `''`.
* __className__ | `string`: nazwy klas. Default: `''`.
* __inline__ | `boolean`: kontroluje, czy Markdown ma być renderowany jako tekst inline. Default: `false`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady


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
