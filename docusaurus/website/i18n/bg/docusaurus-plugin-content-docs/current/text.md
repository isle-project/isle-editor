---
id: text 
title: Text
sidebar_label: Text
---

Компонент за текст, който позволява визуализиране на суров текст като Markdown и позволява гласово управление.

## Опции

* __raw__ | `string`: текст, който трябва да се визуализира. Default: `''`.
* __className__ | `string`: имена на класове. Default: `''`.
* __inline__ | `boolean`: контролира дали Markdown да се визуализира като вграден текст. Default: `false`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери


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
