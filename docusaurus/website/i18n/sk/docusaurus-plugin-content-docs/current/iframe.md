---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Komponent iFrame.

## Možnosti

* __src__ | `string (required)`: zdrojová adresa URL. Default: `none`.
* __fullscreen__ | `boolean`: ovláda, či sa má iFrame zobraziť v celoobrazovkovom režime.. Default: `false`.
* __title__ | `string`: Názov iFrame. Default: `'An iFrame'`.
* __width__ | `number`: Šírka iFrame (v px). Default: `900`.
* __height__ | `number`: Výška iFrame (v px). Default: `600`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

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


