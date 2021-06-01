---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Компонент iFrame.

## Опции

* __src__ | `string (required)`: URL адрес на източника. Default: `none`.
* __fullscreen__ | `boolean`: контролира дали iFrame да се показва в пълноекранен режим.. Default: `false`.
* __title__ | `string`: Заглавие на iFrame. Default: `'An iFrame'`.
* __width__ | `number`: Ширина на iFrame (в px). Default: `900`.
* __height__ | `number`: Височина на iFrame (в px). Default: `600`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

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


