---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

iFrame komponents.

## Iespējas

* __src__ | `string (required)`: avota URL. Default: `none`.
* __fullscreen__ | `boolean`: kontrolē, vai iFrame tiek rādīts pilnekrāna režīmā.. Default: `false`.
* __title__ | `string`: iFrame virsraksts. Default: `'An iFrame'`.
* __width__ | `number`: iFrame platums (px). Default: `900`.
* __height__ | `number`: iFrame augstums (px). Default: `600`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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


