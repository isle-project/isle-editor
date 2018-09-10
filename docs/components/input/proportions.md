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

* __disabled__ | `boolean`: undefined. Default: `false`.
* __height__ | `number`: undefined. Default: `200`.
* __innerRadius__ | `number`: undefined. Default: `75`.
* __legends__ | `array`: undefined. Default: `none`.
* __margin__ | `string`: undefined. Default: `none`.
* __nElements__ | `number`: undefined. Default: `6`.
* __onChange__ | `function`: undefined. Default: `onChange(){}`.
* __precision__ | `number`: undefined. Default: `1`.
* __step__ | `number`: undefined. Default: `0.1`.
