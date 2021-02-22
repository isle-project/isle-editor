---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Компонент iFrame.

## Варианты

* __src__ | `string (required)`: URL-адрес источника. Default: `none`.
* __fullscreen__ | `boolean`: управляет отображением iFrame в полноэкранном режиме. Default: `false`.
* __title__ | `string`: название iFrame. Default: `'An iFrame'`.
* __width__ | `number`: ширина iFrame (в px). Default: `900`.
* __height__ | `number`: высота iFrame (в px). Default: `600`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

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


