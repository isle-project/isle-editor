---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

iFrame-komponentti.

## Vaihtoehdot

* __src__ | `string (required)`: lähteen URL-osoite. Default: `none`.
* __fullscreen__ | `boolean`: ohjaa, näytetäänkö iFrame koko näytön tilassa.. Default: `false`.
* __title__ | `string`: iFramen otsikko. Default: `'An iFrame'`.
* __width__ | `number`: iFramen leveys (px). Default: `900`.
* __height__ | `number`: iFramen korkeus (px). Default: `600`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

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


