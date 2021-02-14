---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Een iFrame component.

## Options

* __src__ | `string (required)`: bron-URL. Default: `none`.
* __fullscreen__ | `boolean`: bepaalt of het iFrame op het volledige scherm moet worden weergegeven.. Default: `false`.
* __title__ | `string`: iFrametitel. Default: `'An iFrame'`.
* __width__ | `number`: iFrame breedte (in px). Default: `900`.
* __height__ | `number`: iFramehoogte (in px). Default: `600`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


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


