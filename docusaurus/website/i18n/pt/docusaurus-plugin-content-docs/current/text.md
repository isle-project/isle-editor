---
id: text 
title: Text
sidebar_label: Text
---

Componente de texto, que permite a renderização de texto bruto como Markdown e permite o controle por voz.

## Opções

* __raw__ | `string`: texto a ser entregue. Default: `''`.
* __className__ | `string`: nomes de classes. Default: `''`.
* __inline__ | `boolean`: controla se o Markdown deve ser renderizado como texto em linha. Default: `false`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos


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
