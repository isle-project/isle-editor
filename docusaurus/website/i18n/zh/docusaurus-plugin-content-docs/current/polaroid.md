---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

一个以宝丽来风格显示图像的组件。

## Options

* __image__ | `string`: 要在宝丽来相框中显示的图像的URL。. Default: `none`.
* __draggable__ | `boolean`: 控制是否可以在屏幕上拖动宝丽来。. Default: `false`.
* __showPin__ | `boolean`: 销子. Default: `false`.
* __width__ | `number`: 宝丽来宽度(单位：px). Default: `350`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onClick__ | `function`: 当图像被点击时调用的事件处理程序（接收Polaroid的id作为参数）。. Default: `none`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Pin & Draggable', value: 'pinnedAndDraggable' },
        { label: 'Custom Width', value: 'customWidth' },
        { label: 'Handling Clicks', value: 'handlingClicks' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Polaroid image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="pinnedAndDraggable">

```jsx live
<Polaroid showPin draggable image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="customWidth">

```jsx live
<Polaroid width={200}
 image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="handlingClicks">

```jsx live
<Polaroid image="https://bit.ly/2MGl7K0" 
 onClick={() => {
     alert( 'The polaroid has been clicked...' );
 }} />
```

</TabItem>

</Tabs>
