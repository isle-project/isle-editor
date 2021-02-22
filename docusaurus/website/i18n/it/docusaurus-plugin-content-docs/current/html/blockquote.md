---
id: blockquote
title: blockquote
sidebar_label: blockquote
---

Componente che visualizza un'offerta estesa.

## Opzioni

* __cite__ | `string`: fonte per il preventivo. Default: `none`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
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
