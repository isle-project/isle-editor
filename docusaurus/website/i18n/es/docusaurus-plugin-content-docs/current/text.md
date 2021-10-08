---
id: text 
title: Text
sidebar_label: Text
---

Componente de texto, que permite la representación de texto en bruto como Markdown y permite el control por voz.

## Opciones

* __raw__ | `string`: texto a ser presentado. Default: `''`.
* __className__ | `string`: nombres de clase. Default: `''`.
* __inline__ | `boolean`: controla si se debe hacer la marcación como texto en línea. Default: `false`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Ejemplos


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
