---
id: text 
title: Text
sidebar_label: Text
---

Textová zložka, ktorá umožňuje vykresľovanie surového textu ako Markdown a umožňuje hlasové ovládanie.

## Možnosti

* __raw__ | `string`: text, ktorý sa má vykresliť. Default: `''`.
* __className__ | `string`: názvy tried. Default: `''`.
* __inline__ | `boolean`: kontroluje, či sa má Markdown vykresliť ako riadkový text. Default: `false`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady


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
