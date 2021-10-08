---
id: text 
title: Text
sidebar_label: Text
---

Teksto komponentas, kuris leidžia atvaizduoti neapdorotą tekstą kaip "Markdown" ir leidžia valdyti balsu.

## Parinktys

* __raw__ | `string`: atvaizduojamas tekstas. Default: `''`.
* __className__ | `string`: klasių pavadinimai. Default: `''`.
* __inline__ | `boolean`: kontroliuoja, ar Markdown atvaizduoti kaip įterptinį tekstą.. Default: `false`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai


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
