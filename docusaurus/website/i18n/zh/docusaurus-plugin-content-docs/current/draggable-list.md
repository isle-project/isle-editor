---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

一个可拖动的元素列表，可以由学生重新排序。

## Options

* __data__ | `array (required)`: `id`和`text`键的对象数组。. Default: `none`.
* __onChange__ | `function`: 在每次变化时用新的有序数据数组调用回调。. Default: `onChange(){}`.
* __onInit__ | `function`: 安装组件后调用回调函数. Default: `onInit(){}`.
* __shuffle__ | `boolean`: 控制数据元素在初始显示时是否应该被洗牌。. Default: `false`.
* __disabled__ | `boolean`: 控制是否可以拖动元素. Default: `false`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## Examples

```jsx live
<DraggableList
    data={[
        { id: 0, text: "Compact" },
        { id: 1, text: "Large" },
        { id: 2, text: "Midsize" },
        { id: 3, text: "Small" }
    ]}
/>
```

