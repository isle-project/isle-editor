---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

A proportions input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.

## Example

```jsx live
<ProportionsInput
    user
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

* __colors__ | `array<string>`: array of colors for the pie chart components. If not defined, a custom color scale will be used. Default: `none`.
* __disabled__ | `boolean`: controls whether the input field is deactivated. Default: `false`.
* __height__ | `number`: proportions input height (in px). Default: `200`.
* __legends__ | `array`: group labels. Default: `[]`.
* __onChange__ | `function`: callback function to be invoked when a choice is made. Default: `onChange(){}`.
* __precision__ | `number`: displayed precision of proportion values. Default: `1`.
* __step__ | `number`: the step of the arrows seen when hovering the cursor above the input box. Default: `0.1`.
