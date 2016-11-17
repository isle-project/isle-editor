# Slider Input

A slider input component. Usually, this will be used as part of an [ISLE dashboard](dashboard.md), but it can also be used standalone. In this case, you want to handle changes via the `onChange` attribute. 

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

#### Options:

* __defaultValue__: The value the slider is initialized with. Default: `10`.
* __fractionDigits__: The number of digits after the decimal points displayed for the current value. Default: `null`.
* __max__: The maximum value of the slider. Default: `100`.
* __min__: The minimum value of the slider. Default: `0`.
* __step__: The step size of the slider. Default: `1`.
* __onChange__: Callback `function` invoked after each change of the slider value. Default: `null`.
