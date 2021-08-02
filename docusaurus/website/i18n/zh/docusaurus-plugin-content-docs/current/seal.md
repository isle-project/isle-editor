---
id: seal 
title: Seal
sidebar_label: Seal
---

一个批准印章；

## 选项

* __active__ | `boolean`: 控制封条是激活还是灰化. Default: `true`.
* __onClick__ | `function`: 当音符被点击时调用的回调函数。. Default: `onClick() {}`.
* __scale__ | `number`: 对象大小(如果没有明确设置，封印不会被重新调整大小). Default: `none`.
* __innerStyle__ | `object`: 圈内人风格. Default: `{}`.
* __lower__ | `string`: 下文. Default: `'The lower text'`.
* __lowerArc__ | `number`: 弧线. Default: `150`.
* __noOrnaments__ | `boolean`: 阻止装饰品的呈现. Default: `false`.
* __removable__ | `boolean`: 控制点击时是否删除该音符. Default: `false`.
* __style__ | `object`: 元素的样式. Default: `none`.
* __title__ | `(string|node)`: 封号. Default: `'Enter a title'`.
* __upper__ | `string`: 上文. Default: `'The upper text'`.
* __upperArc__ | `number`: 弧线. Default: `150`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Removable', value: 'removable' },
        { label: 'Scaled', value: 'scaled' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Seal title="LESSON DONE" upper="Carnegie Mellon" upperArc={120} lower="University" lowerArc={105} />
```

</TabItem>


<TabItem value="withStyle">

```jsx live

<Seal 
  title="LESSON DONE" 
  style={{ backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon"  upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

<TabItem value="removable">

```jsx live
<Seal 
  title="LESSON DONE" 
  noOrnaments
  removable
  style={{ backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon"  upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

<TabItem value="scaled">

```jsx live
<Seal 
  title="BIG SEAL" 
  scale={1.15}
  style={{ fontWeight: 800, color: 'darkred', backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon" upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

</Tabs>
