---
id: blockquote
title: blockquote
sidebar_label: blockquote
---

Komponenta zobrazující rozšířenou citaci.

## Možnosti

* __cite__ | `string`: zdroj citace. Default: `none`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'Cite', value: 'cite' },
        { label: 'Styled', value: 'styled' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<blockquote>
After all is said and done, more is said than done.
</blockquote>
```

</TabItem>

<TabItem value="withMarkdown">

```jsx live
<blockquote>

# A Markdown Quote

After all is **said** and **done**, more is said than done. 

[Francis Crick](https://en.wikipedia.org/wiki/Francis_Crick)
</blockquote>
```

</TabItem>

<TabItem value="cite">

```jsx live
<blockquote cite="https://de.wikipedia.org/wiki/Francis_Crick">
After all is said and done, more is said than done.(Francis Crick)
<p style={{ fontSize: 14, marginTop: 20}}>The cite property is just for search daemons</p>
</blockquote>
```
</TabItem>

<TabItem value="styled" >

```jsx live
<blockquote 
  style={{ color: 'red',
    fontFamily: 'Palatino',
    fontSize: 26, 
    fontStyle: 'italic',
    background: 'gold',
    borderLeft: '30px solid red',
    quotes: "red"
  }}
>
    After all is said and done, more is said than done.
    <br />(Francis Crick)
</blockquote>
```

</TabItem>

</Tabs>
