---
id: text 
title: Text
sidebar_label: Text
---

Componente testo, che permette di rendere il testo grezzo come Markdown e permette il controllo vocale.

## Opzioni

* __raw__ | `string`: testo da rendere. Default: `''`.
* __className__ | `string`: nomi delle classi. Default: `''`.
* __inline__ | `boolean`: controlla se rendere il Markdown come testo in linea. Default: `false`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi


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
