---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Component that allows a group of people to vote on the weights and importance of given options.

## Example

```jsx live
<ProportionsSurvey 
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```



## Options

* __allowMultipleAnswers__ | `boolean`: controls whether one wishes to allow students to answer the survey multiple times. Default: `false`.
* __anonymous__ | `boolean`: controls whether student answers are anonymized. Default: `false`.
* __colors__ | `array`: array of colors for the pie chart components. If not defined, a pre-defined color scale will be used. Default: `none`.
* __disabled__ | `boolean`: controls whether the survey is deactivated. Default: `false`.
* __group__ | `string`: group display heading. Default: `'group results'`.
* __groupHeight__ | `number`: proportions input height for group display (in px). Default: `100`.
* __legends__ | `array`: legend labels that describe the options to be weighed. Default: `[]`.
* __margin__ | `string`: proportion input margin (in px). Default: `'40px'`.
* __onSubmit__ | `function`: callback function invoked once students submits an answer. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proportions input height for individual student (in px). Default: `200`.
* __precision__ | `number`: displayed precision of proportion values. Default: `2`.
* __question__ | `(string|node)`: the question to be displayed. Default: `''`.
* __step__ | `number`: the step of the arrows seen when hovering the cursor above the input box. Default: `0.25`.
