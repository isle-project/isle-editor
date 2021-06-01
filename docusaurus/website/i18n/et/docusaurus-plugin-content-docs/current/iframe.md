---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

iFrame'i komponent.

## Valikud

* __src__ | `string (required)`: allika URL. Default: `none`.
* __fullscreen__ | `boolean`: kontrollib, kas iFrame kuvatakse täisekraani režiimis.. Default: `false`.
* __title__ | `string`: iFrame'i pealkiri. Default: `'An iFrame'`.
* __width__ | `number`: iFrame laius (px). Default: `900`.
* __height__ | `number`: iFrame kõrgus (px). Default: `600`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

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


