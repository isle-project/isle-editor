---
id: text 
title: Text
sidebar_label: Text
---

Componenta Text, care permite redarea textului brut ca Markdown și permite controlul vocal.

## Opțiuni

* __raw__ | `string`: textul care urmează să fie redat. Default: `''`.
* __className__ | `string`: nume de clase. Default: `''`.
* __inline__ | `boolean`: controlează dacă se redă Markdown ca text în linie. Default: `false`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple


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
