---
id: text 
title: Text
sidebar_label: Text
---

Текстовый компонент, позволяющий отрисовывать необработанный текст как Markdown и включающий голосовое управление.

## Варианты

* __raw__ | `string`: текст для визуализации. Default: `''`.
* __className__ | `string`: имена классов. Default: `''`.
* __inline__ | `boolean`: управляет отображением Markdown в виде встраиваемого текста. Default: `false`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры


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
