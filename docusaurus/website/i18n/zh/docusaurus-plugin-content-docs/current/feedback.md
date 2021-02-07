---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

收集用户反馈的按钮。

## Options

* __confusedMsg__ | `string`: 混乱的按钮将在工具提示中显示信息。. Default: `none`.
* __feedbackMsg__ | `string`: 在工具提示中显示详细的反馈按钮的信息。. Default: `none`.
* __understoodMsg__ | `string`: 在工具提示中显示被理解的按钮的信息。. Default: `none`.
* __customFeedback__ | `boolean`: 控制组件是否接受自定义反馈. Default: `true`.
* __vertical__ | `boolean`: 如果设置为 "true"，按钮将垂直显示。. Default: `false`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## Examples

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

