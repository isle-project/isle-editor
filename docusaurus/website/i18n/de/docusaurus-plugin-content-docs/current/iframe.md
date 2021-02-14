---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Eine iFrame-Komponente.

## Options

* __src__ | `string (required)`: Quell-URL. Default: `none`.
* __fullscreen__ | `boolean`: steuert, ob der iFrame im Vollbildmodus angezeigt werden soll. Default: `false`.
* __title__ | `string`: iFrame-Titel. Default: `'An iFrame'`.
* __width__ | `number`: iFrame-Breite (in px). Default: `900`.
* __height__ | `number`: iFrame-Höhe (in px). Default: `600`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


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


