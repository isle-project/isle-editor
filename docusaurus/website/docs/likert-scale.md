---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

A component showing a question and a five-point scale for students to answer.

## Examples

```jsx live
<LikertScale 
    id="discrimination" 
    question="After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?" 
    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']} 
/>
```

## Options

* __question__ | `(string|node)`: question to be printed. Default: `''`.
* __options__ | `array`: an array of five elements holding custom labels for the different scale levels. Default: `none`.
* __noMultipleResponses__ | `boolean`: disallow multiple submissions from a single student. Default: `false`.
* __disableSubmitNotification__ | `boolean`: controls whether to disable submission notifications. Default: `false`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
