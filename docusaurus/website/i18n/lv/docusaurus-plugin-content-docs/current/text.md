---
id: text 
title: Text
sidebar_label: Text
---

Teksta komponente, kas ļauj atveidot neapstrādātu tekstu kā Markdown un nodrošina balss vadību.

## Iespējas

* __raw__ | `string`: atveidojamais teksts. Default: `''`.
* __className__ | `string`: klašu nosaukumi. Default: `''`.
* __inline__ | `boolean`: kontrolē, vai Markdown atveidot kā ievietoto tekstu.. Default: `false`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri


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
