---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

O componentă iFrame.

## Opțiuni

* __src__ | `string (required)`: sursa URL. Default: `none`.
* __fullscreen__ | `boolean`: controlează dacă se afișează sau nu iFrame-ul în modul fullscreen. Default: `false`.
* __title__ | `string`: Titlul iFrame. Default: `'An iFrame'`.
* __width__ | `number`: Lățimea iFrame (în px). Default: `900`.
* __height__ | `number`: Înălțimea iFrame (în px). Default: `600`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

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


