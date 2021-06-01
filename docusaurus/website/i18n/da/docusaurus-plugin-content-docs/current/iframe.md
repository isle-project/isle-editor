---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

En iFrame-komponent.

## Indstillinger

* __src__ | `string (required)`: kilde-URL. Default: `none`.
* __fullscreen__ | `boolean`: styrer, om iFrame skal vises i fuldskærmstilstand. Default: `false`.
* __title__ | `string`: iFrame-titel. Default: `'An iFrame'`.
* __width__ | `number`: iFrame-bredde (i px). Default: `900`.
* __height__ | `number`: iFrame-højde (i px). Default: `600`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Controlled Size', value: 'controlledSize' },
        { label: 'Custom CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<IFrame src="https://wikipedia.org" />
```

</TabItem>

<TabItem value="controlledSize" >

```jsx live
<IFrame src="https://wikipedia.org" 
  width={600} 
  height={400} 
/>
```
</TabItem>

<TabItem value="withCSS" >

```jsx live
<IFrame src="https://wikipedia.org" 
    width={600} 
    height={600} 
    style={{ outline: '10px solid black' }}
/>
```
</TabItem>

</Tabs>


