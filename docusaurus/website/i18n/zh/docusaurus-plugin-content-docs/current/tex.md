---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX`是一个ISLE元素，可用于显示LaTeX方程。在内部，该组件使用[KaTeX](https://github.com/Khan/KaTeX)进行快速渲染。

## Options

* __raw__ | `(string|number) (required)`: 要渲染的LaTeX字面 "字符串"。也接受`数字`。. Default: `none`.
* __displayMode__ | `boolean`: `boolean`表示是以内联方式还是显示方式显示方程。. Default: `false`.
* __numbered__ | `boolean`: 控制是否显示显示模式方程的方程号。. Default: `false`.
* __style__ | `object`: `对象`，带有CSS键值对，应用于方程容器。. Default: `{}`.
* __tag__ | `string`: 自定义右侧显示方程的字符。預設為課堂中方程的數目。. Default: `none`.
* __elems__ | `object`: `对象'，`键'表示LaTeX字符，其相应的值是配置`对象'，使其具有互动性。设置`tooltip`选项将在悬停在LaTeX字符上时显示一个工具提示。设置 "变量 "属性将显示一个输入滑块来改变相应的状态变量；在这种情况下，支持额外的属性 "legend"、"min"、"max "和 "step"。. Default: `{}`.
* __popoverPlacement__ | `string`: 指定的 "元素 "的弹出位置（"顶部"、"右侧"、"底部 "或 "左侧"）。. Default: `'top'`.
* __onPopover__ | `function`: 当控件弹出式打开或关闭时，回调 "函数"；以布尔值作为唯一参数接收显示状态。. Default: `onPopover() {}`.
* __onClick__ | `function`: 每当用户点击方程时，就会调用回调`function`。. Default: `none`.


## Examples

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



