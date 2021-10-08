---
id: text 
title: Text
sidebar_label: Text
---

Text-Komponente, die das Rendern von Rohtext als Markdown erlaubt und die Sprachsteuerung ermöglicht.

## Optionen

* __raw__ | `string`: zu rendernder Text. Default: `''`.
* __className__ | `string`: Klassennamen. Default: `''`.
* __inline__ | `boolean`: steuert, ob das Markdown als Inline-Text gerendert werden soll. Default: `false`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Beispiele


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
