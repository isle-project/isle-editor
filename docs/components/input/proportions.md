# Proportions Input

A proportions input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.

#### Example:

``` js
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

[Open interactive preview](https://isle.heinz.cmu.edu/components/proportions-input/)

#### Options:

* __disabled__ | `boolean`: controls whether the input field is deactivated. Default: `false`.
* __height__ | `number`: proportions input height (in px). Default: `200`.
* __innerRadius__ | `number`: inner radius of proportions pie chart (in px). Default: `75`.
* __legends__ | `array`: group labels. Default: `none`.
* __margin__ | `string`: proportion input margin (in px). Default: `none`.
* __nElements__ | `number`: number of elements. Default: `6`.
* __onChange__ | `function`: callback function to be invoked when a choice is made. Default: `onChange(){}`.
* __precision__ | `number`: displayed precision of proportion values. Default: `1`.
* __step__ | `number`: the step of the arrows seen when hovering the cursor above the input box. Default: `0.1`.
