--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

一个用于组合处理多个子输入字段的仪表板。

## 选项

* __autoStart__ | `boolean`: 如果设置为 "true"，"onGenerate "函数在启动时以默认输入值执行。. Default: `true`.
* __autoUpdate__ | `boolean`: 控制当一个子输入字段发生变化时，是否应自动调用 "onGenerate "函数。. Default: `false`.
* __description__ | `(string|node)`: 仪表盘描述. Default: `''`.
* __disabled__ | `boolean`: 控制是否禁用仪表盘. Default: `false`.
* __label__ | `string`: 纽扣标签. Default: `none`.
* __maxWidth__ | `number`: 仪表盘的最大宽度. Default: `600`.
* __className__ | `string`: 班名. Default: `''`.
* __bodyClassName__ | `string`: 卡片主体的类别名称. Default: `'d-grid gap-3'`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onGenerate__ | `function`: 当点击按钮或仪表板输入值发生变化时（如果`autoUpdate`设置为`true`），调用该函数。调用该函数时，输入字段的值按照它们在仪表板中的顺序排列。. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: 卡名. Default: `''`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiple Inputs', value: 'multipleInputs' }
    ]}
>

<TabItem value="minimal"> 

```jsx live
<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

</TabItem>

<TabItem value="multipleInputs" > 

```jsx live
<Dashboard 
    title="Multiply three numbers."
    style={{ width: 600, boxShadow: '0 0 24px black' }}
    onGenerate={( x, y, z ) => { alert( x*y*z ); }} 
    autoStart={false} 
>
    <SliderInput
        legend="First Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Second Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Third Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
</Dashboard>
```

</TabItem>

</Tabs>
