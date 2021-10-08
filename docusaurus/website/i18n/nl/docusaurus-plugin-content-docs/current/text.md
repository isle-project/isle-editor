---
id: text 
title: Text
sidebar_label: Text
---

Tekstcomponent, die het mogelijk maakt om ruwe tekst weer te geven als Markdown en die spraakbesturing mogelijk maakt.

## Opties

* __raw__ | `string`: Weer te geven tekst. Default: `''`.
* __className__ | `string`: klassennamen. Default: `''`.
* __inline__ | `boolean`: controleert of de Markdown als inline tekst moet worden weergegeven. Default: `false`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden


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
