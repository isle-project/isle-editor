---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Un componente iFrame.

## Options

* __src__ | `string (required)`: URL della fonte. Default: `none`.
* __fullscreen__ | `boolean`: controlla se visualizzare l'iFrame in modalità a schermo intero. Default: `false`.
* __title__ | `string`: Titolo iFrame. Default: `'An iFrame'`.
* __width__ | `number`: Larghezza iFrame (in px). Default: `900`.
* __height__ | `number`: Altezza iFrame (in px). Default: `600`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Examples

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


