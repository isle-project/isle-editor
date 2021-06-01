---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Komponenta iFrame.

## Možnosti

* __src__ | `string (required)`: zdrojová adresa URL. Default: `none`.
* __fullscreen__ | `boolean`: řídí, zda se má iFrame zobrazit v celoobrazovkovém režimu.. Default: `false`.
* __title__ | `string`: Název iFrame. Default: `'An iFrame'`.
* __width__ | `number`: Šířka iFrame (v px). Default: `900`.
* __height__ | `number`: Výška iFrame (v px). Default: `600`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

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


