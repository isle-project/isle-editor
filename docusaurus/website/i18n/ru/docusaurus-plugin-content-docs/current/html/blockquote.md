---
id: blockquote
title: blockquote
sidebar_label: blockquote
---

Компонент, отображающий расширенное предложение.

## Варианты

* __cite__ | `string`: источник цитаты. Default: `none`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

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
