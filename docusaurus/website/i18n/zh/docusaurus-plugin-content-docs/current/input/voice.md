---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

一个语音输入组件。

## Options

* __autorecord__ | `boolean`: 控制是否自动开始录制. Default: `false`.
* __defaultValue__ | `string`: 默认文本值. Default: `''`.
* __grammars__ | `array`: 语音语法表(不支持). Default: `[]`.
* __legend__ | `(string|node)`: 图例在输入栏前显示. Default: `''`.
* __mode__ | `string`: 设置为 "full "在麦克风旁显示文本输入字段，"status "只显示带有转录文本的状态栏，"microphone "只显示一个按钮来切换录音，或者 "none "当语音输入应该是隐形的，纯粹通过热键/语音命令来控制。. Default: `'full'`.
* __maxAlternatives__ | `number`: 每个语音识别结果提供的最多备选方案数量. Default: `1`.
* __onChange__ | `function`: 文本输入值更新时调用回调函数。. Default: `onChange() {}`.
* __onClick__ | `function`: 点击麦克风按钮时调用的回调函数。. Default: `onClick() {}`.
* __onFinalText__ | `function`: 回调函数. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: 开始录音时调用的回调函数. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: 录制停止后调用回调函数. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: 回调函数与文本段调用. Default: `onSegment() {}`.
* __onSubmit__ | `function`: 点击 "Enter "提交文本输入值时的回调函数。. Default: `onSubmit() {}`.
* __placeholder__ | `string`: 文本输入占位符. Default: `none`.
* __remote__ | `object`: 对象的 "开始"、"停止"、"切换 "和相关热键。. Default: `none`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __timeout__ | `number`: 录音超时的毫秒数。. Default: `none`.
* __stopTooltip__ | `string`: 录制时显示工具提示信息. Default: `none`.
* __startTooltip__ | `string`: 不记录时显示工具提示信息. Default: `none`.
* __tooltipPlacement__ | `string`: 工具提示的方向. Default: `'left'`.
* __width__ | `number`: 语音输入宽度(单位：px). Default: `500`.
* __height__ | `number`: 语音输入高度(单位：px). Default: `36`.


## Examples

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



