---
id: text 
title: Text
sidebar_label: Text
---

Tekstikomponent, mis võimaldab toorteksti esitamist Markdownina ja võimaldab hääljuhtimist.

## Valikud

* __raw__ | `string`: esitatav tekst. Default: `''`.
* __className__ | `string`: klassi nimed. Default: `''`.
* __inline__ | `boolean`: kontrollib, kas Markdown'i renderdamine toimub realtekstina.. Default: `false`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited


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
