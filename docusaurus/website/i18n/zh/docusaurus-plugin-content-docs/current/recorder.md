---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

一个用于录制音频、屏幕和视频的ISLE组件。

## 选项

* __audio__ | `boolean`: 表示是否要录制音频。. Default: `false`.
* __camera__ | `boolean`: 表示是否要录制网络摄像头。. Default: `false`.
* __screen__ | `boolean`: 表明是否应该捕捉屏幕. Default: `false`.
* __autostart__ | `boolean`: 表示是否应立即开始录制. Default: `false`.
* __downloadable__ | `boolean`: 表示用户是否应该能够下载该录音。. Default: `false`.
* __uploadable__ | `boolean`: 表示用户是否可以将录音上传至服务器。. Default: `false`.
* __bitsPerSecond__ | `number`: 位/秒. Default: `1280000`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



