---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

在指定的时间后，出现组件会使其所有的子代变得可见。

## 选项

* __active__ | `boolean`: 控制计数器是否应该被激活. Default: `false`.
* __delay__ | `number`: 组件出现前的毫秒数. Default: `1000`.


## 例子

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



