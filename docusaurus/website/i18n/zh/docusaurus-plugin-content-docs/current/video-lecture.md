---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

一个视频讲座组件，显示视频与交互式元素穿插在一起。

## 选项

* __controls__ | `boolean`: 表示是否显示视频播放器的控制元素。. Default: `true`.
* __instructorView__ | `boolean`: 控制是否包含教师视图. Default: `true`.
* __linkToDashboard__ | `boolean`: 控制是否在完成视频讲座后显示到仪表板的链接。. Default: `false`.
* __steps__ | `array (required)`: 视频URL和中间要显示的组件的数组。. Default: `none`.
* __videoWidth__ | `(string|number)`: 视频宽度. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: 视频高度. Default: `'98vh'`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

