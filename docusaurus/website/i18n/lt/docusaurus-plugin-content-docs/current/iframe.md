---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

iFrame komponentas.

## Parinktys

* __src__ | `string (required)`: šaltinio URL. Default: `none`.
* __fullscreen__ | `boolean`: kontroliuoja, ar iFrame rodomas viso ekrano režimu.. Default: `false`.
* __title__ | `string`: iFrame pavadinimas. Default: `'An iFrame'`.
* __width__ | `number`: iKadro plotis (px). Default: `900`.
* __height__ | `number`: iKadro aukštis (px). Default: `600`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

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


