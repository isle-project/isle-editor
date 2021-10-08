---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

绘画素描板，用于在讲义幻灯片或空页上做笔记。

## 选项

* __autoSave__ | `boolean`: 控制编辑器是否应该在给定的时间间隔内将当前文本保存到浏览器的本地存储中。. Default: `true`.
* __feedbackButtons__ | `boolean`: 控制是否在每个幻灯片上显示反馈按钮. Default: `false`.
* __intervalTime__ | `number`: 自动保存的间隔时间. Default: `10000`.
* __hideInputButtons__ | `boolean`: 控制是否隐藏绘图和文本输入按钮. Default: `false`.
* __hideNavigationButtons__ | `boolean`: 控制是否隐藏页面间导航的按钮。. Default: `false`.
* __hideSaveButtons__ | `boolean`: 控制是否隐藏保存按钮. Default: `false`.
* __hideTransmitButtons__ | `boolean`: 控制是否隐藏传送用户操作的按钮。. Default: `false`.
* __brushSize__ | `number`: 画笔大小. Default: `4`.
* __color__ | `string`: 笔色. Default: `'#444444'`.
* __canvasWidth__ | `number`: 画布元素的宽度(单位：px). Default: `1200`.
* __canvasHeight__ | `number`: 画布元素的高度(单位：px). Default: `700`.
* __fullscreen__ | `boolean`: 控制是否根据浏览器窗口的宽度和高度自动调整画布的大小。. Default: `false`.
* __fill__ | `string`: 如果 "水平"，则在绘制PDF时填充所有可用的水平空间；如果 "垂直"，则所有垂直空间用于防止Y轴溢出。. Default: `'vertical'`.
* __disabled__ | `boolean`: 是否将该组件设为只读，并禁止在草图板上绘图。. Default: `false`.
* __fontFamily__ | `string`: 字库. Default: `'Arial'`.
* __fontSize__ | `number`: 字号. Default: `24`.
* __nodes__ | `object`: 要在指定幻灯片上呈现的组件；`键`应对应页码，`值`对应组件。. Default: `{}`.
* __noPages__ | `number`: 初始页数. Default: `1`.
* __pdf__ | `string`: 链接到PDF文件，用于制作页面背景。. Default: `none`.
* __showTutorial__ | `boolean`: 启动时显示sketchpad教程. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: 控制是否在工具栏宽度不够时开始隐藏按钮（否则将开始新的一行）。. Default: `false`.
* __transmitOwner__ | `boolean`: 业主的行为是否应该实时传送给其他用户？. Default: `true`.
* __groupMode__ | `boolean`: 控制是否将用户的所有行为传送给其他所有人. Default: `false`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 每当有新的线条元素被绘制时，就会调用回调。. Default: `onChange() {}`.


## 例子

```jsx live
<Sketchpad canvasWidth={750} />
```

