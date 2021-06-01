---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Komponenta iFrame.

## Možnosti

* __src__ | `string (required)`: URL vira. Default: `none`.
* __fullscreen__ | `boolean`: nadzoruje, ali naj se okvir iFrame prikaže v celozaslonskem načinu.. Default: `false`.
* __title__ | `string`: Naslov iFrame. Default: `'An iFrame'`.
* __width__ | `number`: Širina okvirja iFrame (v px). Default: `900`.
* __height__ | `number`: Višina okvirja iFrame (v px). Default: `600`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

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


