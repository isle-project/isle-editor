---
id: text 
title: Text
sidebar_label: Text
---

Composant texte, qui permet de rendre le texte brut sous forme de Markdown et permet le contrôle vocal.

## Options

* __raw__ | `string`: texte à rendre. Default: `''`.
* __className__ | `string`: noms de classe. Default: `''`.
* __inline__ | `boolean`: contrôle si la démarque doit être rendue sous forme de texte en ligne. Default: `false`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples


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
