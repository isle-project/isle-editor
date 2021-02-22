---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

一个ISLE组件，允许两个渲染两面。

## 选项

* __button__ | `string`: 纽扣标签. Default: `none`.
* __draggable__ | `boolean`: 控制卡片是否可以在周围拖动. Default: `false`.
* __flipSpeedBackToFront__ | `number`: 卡片从背景转到前景的速度，以秒为单位。. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: 数字}卡片从前景转到背景的速度，以秒为单位。. Default: `1`.
* __oneTime__ | `boolean`: 表示翻转过程是否可以只执行一次。. Default: `false`.
* __perspective__ | `number`: CSS属性值，用于赋予三维定位元素一个透视效果。. Default: `1000`.
* __size__ | `number`: undefined. Default: `250`.
* __disabled__ | `boolean`: 控制是否禁用可翻转卡。. Default: `false`.
* __value__ | `boolean`: 翻牌状态. Default: `none`.
* __defaultValue__ | `boolean`: 翻牌状态. Default: `false`.
* __containerStyle__ | `object`: 容器的CSS样式. Default: `{}`.
* __frontStyle__ | `object`: 前卡的CSS样式. Default: `{}`.
* __backStyle__ | `object`: 背卡的CSS样式. Default: `{}`.
* __onChange__ | `function`: 一旦卡片被翻转，就会调用回调；接收当前的翻转状态作为唯一的参数。. Default: `onChange() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Slow Motion', value: 'slowMo' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FlippableCard containerStyle={{float: 'none'}} size={200}>
    <div>
        <img src="https://bit.ly/2YU5EbU" />
    </div>
    <div>
       <img src="https://bit.ly/3aGv9mp" />
    </div>
</FlippableCard>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<FlippableCard 
  containerStyle={{float: 'none'}} 
  frontStyle={{fontSize: 50, textAlign: 'center'}} 
  backStyle={{fontSize: 50, textAlign: 'center', background: 'purple', color: 'white'}} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

<TabItem value="slowMo">

```jsx live
<FlippableCard 
  flipSpeedBackToFront={7} 
  flipSpeedFrontToBack={7}   
  containerStyle={{float: 'none'}} 
  frontStyle={{fontSize: 50, textAlign: 'center'}} 
  backStyle={{fontSize: 50, textAlign: 'center', background: 'purple', color: 'white'}} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

</Tabs>
