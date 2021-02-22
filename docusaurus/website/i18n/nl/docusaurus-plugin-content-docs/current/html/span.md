---
id: span
title: span
sidebar_label: span
---

Generiek inline containerelement.

## Opties

* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Highlight', value: 'highlight' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<span>inline text wrapped by span tag</span>
```

</TabItem>

<TabItem value="withCSS" >

```jsx live
<span style={{ fontSize: 77}}>each</span>
<span style={{ fontSize: 33, color: 'red', fontFamily: 'Times'}}> word</span>
<span style={{ fontSize: 44 }}> another</span>
<span style={{ color: 'blue', fontSize: 44, verticalAlign: 'top' }}><sup>STYLE</sup></span>
```

</TabItem>

<TabItem value="highlight" >

```jsx live
<p>You can <span style={{ color: 'red', fontWeight: 600 }}> highlight </span>anything</p>
```

</TabItem>

</Tabs>

