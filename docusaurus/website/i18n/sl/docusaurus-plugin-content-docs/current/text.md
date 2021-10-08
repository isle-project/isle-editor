---
id: text 
title: Text
sidebar_label: Text
---

Besedilna komponenta, ki omogoča upodabljanje surovega besedila v obliki Markdown in glasovno upravljanje.

## Možnosti

* __raw__ | `string`: besedilo, ki ga je treba prikazati. Default: `''`.
* __className__ | `string`: imena razredov. Default: `''`.
* __inline__ | `boolean`: nadzira, ali naj se Markdown prikaže kot besedilo v vrstici.. Default: `false`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri


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
