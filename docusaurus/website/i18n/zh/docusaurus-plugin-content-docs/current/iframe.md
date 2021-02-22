---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

一个iFrame组件。

## 选项

* __src__ | `string (required)`: 源网址. Default: `none`.
* __fullscreen__ | `boolean`: 控制是否在全屏模式下显示iFrame。. Default: `false`.
* __title__ | `string`: iFrame标题. Default: `'An iFrame'`.
* __width__ | `number`: iFrame宽度(单位：px). Default: `900`.
* __height__ | `number`: iFrame高度(单位：px). Default: `600`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

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


