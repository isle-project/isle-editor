---
id: text 
title: Text
sidebar_label: Text
---

Textová komponenta, která umožňuje vykreslování surového textu jako Markdown a umožňuje hlasové ovládání.

## Možnosti

* __raw__ | `string`: text, který se má vykreslit. Default: `''`.
* __className__ | `string`: názvy tříd. Default: `''`.
* __inline__ | `boolean`: řídí, zda se má Markdown vykreslovat jako inline text.. Default: `false`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady


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
