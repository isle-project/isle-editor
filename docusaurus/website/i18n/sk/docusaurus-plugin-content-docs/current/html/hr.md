---
id: hr
title: hr
sidebar_label: hr
---

Vodorovné pravidlo definujúce tematický zlom v dokumente.

## Možnosti

* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Dashed Line', value: 'dashedLine' },
        { label: 'Dotted Line', value: 'dottedLine' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
    <hr />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<hr style={{
  border: '20px solid black',
  borderRadius: '5px'
}}/>
```
</TabItem>

<TabItem value="dashedLine">

```jsx live
<hr style={{
  background: 'transparent',
  border: '2px dashed black',
}}/>
```
</TabItem>

<TabItem value="dottedLine">

```jsx live
<hr style={{
  background: 'transparent',
  border: '2px dotted red',
}}/>
```
</TabItem>

</Tabs>
