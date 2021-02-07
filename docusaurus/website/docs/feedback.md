---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Buttons to collect user feedback.

## Options

* __confusedMsg__ | `string`: message to be displayed in tooltip for confused button. Default: `none`.
* __feedbackMsg__ | `string`: message to be displayed in tooltip for detailed feedback button. Default: `none`.
* __understoodMsg__ | `string`: message to be displayed in tooltip for understood button. Default: `none`.
* __customFeedback__ | `boolean`: controls whether the component accepts custom feedback. Default: `true`.
* __vertical__ | `boolean`: buttons are displayed vertically if set to `true`. Default: `false`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.


## Examples

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

