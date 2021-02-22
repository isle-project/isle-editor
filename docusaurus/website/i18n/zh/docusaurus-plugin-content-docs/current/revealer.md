---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

一个ISLE组件，教师可以在课堂上有选择的向所有学生展示或隐藏儿童内容。

## 选项

* __message__ | `(string|node)`: 当内容被隐藏时要显示的信息. Default: `none`.
* __show__ | `boolean`: 控制是否初始显示子元素. Default: `false`.


## 例子

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

