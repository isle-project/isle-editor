---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

一个比例输入组件。可以作为ISLE仪表板的一部分或独立使用。在后一种情况下，你想通过 "onChange "属性处理变化，或者通过 "bind "属性将值绑定到一个全局变量。

## 选项

* __colors__ | `array<string>`: 饼图组件的颜色数组。如果没有定义，将使用自定义色标。. Default: `none`.
* __disabled__ | `boolean`: 控制输入字段是否被停用。. Default: `false`.
* __height__ | `number`: 比例输入高度(单位：px). Default: `200`.
* __legends__ | `array`: 集团标签. Default: `[]`.
* __onChange__ | `function`: 选择时调用的回调函数。. Default: `onChange(){}`.
* __precision__ | `number`: 显示比例值的精度. Default: `1`.
* __step__ | `number`: 当光标悬停在输入框上方时，所看到的箭头的步长。. Default: `0.1`.


## 例子

```jsx live
<ProportionsInput
    user
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```

