---
id: expire 
title: Expire
sidebar_label: Expire
---

过期组件会在指定时间后使其所有子代变得不可见。

## 选项

* __active__ | `boolean`: 控制计数器是否应该被激活. Default: `false`.
* __delay__ | `number`: 组件消失前的毫秒数。. Default: `1000`.


## 例子

```jsx live
<Expire>
    <span>When active, I will disappear after one second</span>
</Expire>
```



