---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Egy iFrame komponens.

## Opciók

* __src__ | `string (required)`: forrás URL. Default: `none`.
* __fullscreen__ | `boolean`: szabályozza, hogy az iFrame teljes képernyős módban jelenjen-e meg.. Default: `false`.
* __title__ | `string`: iFrame cím. Default: `'An iFrame'`.
* __width__ | `number`: iFrame szélessége (px-ben). Default: `900`.
* __height__ | `number`: iFrame magasság (px-ben). Default: `600`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

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


