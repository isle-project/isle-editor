---
id: hr
title: hr
sidebar_label: hr
---

Vízszintes szabály, amely egy tematikus törést határoz meg a dokumentumban.

## Opciók

* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

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
