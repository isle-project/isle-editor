---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Ένα στοιχείο iFrame.

## Επιλογές

* __src__ | `string (required)`: διεύθυνση URL πηγής. Default: `none`.
* __fullscreen__ | `boolean`: ελέγχει αν θα εμφανίζεται το iFrame σε λειτουργία πλήρους οθόνης. Default: `false`.
* __title__ | `string`: Τίτλος iFrame. Default: `'An iFrame'`.
* __width__ | `number`: Πλάτος iFrame (σε px). Default: `900`.
* __height__ | `number`: Ύψος iFrame (σε px). Default: `600`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

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


