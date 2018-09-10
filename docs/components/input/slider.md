# Slider Input

A slider input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.

#### Example:

``` js
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/slider-input/)

#### Options:

* __defaultValue__ | `number`: undefined. Default: `10`.
* __disabled__ | `boolean`: undefined. Default: `false`.
* __inline__ | `boolean`: undefined. Default: `false`.
* __max__ | `number`: undefined. Default: `100`.
* __min__ | `number`: undefined. Default: `0`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __precision__ | `number`: undefined. Default: `10`.
* __step__ | `(number|string)`: undefined. Default: `1`.
* __style__ | `object`: undefined. Default: `{}`.
