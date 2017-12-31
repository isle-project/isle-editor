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

[Open interactive preview](https://isle.heinz.cmu.edu/components/slider-input/)

#### Options:

#### Options
* __legend__: The `string` caption of the input. For example, if one wishes to use a slider input to capture age, the `legend` would be "Age". Default: `''`.
* __defaultValue__: The value the slider is initialized with. Default: `10`.
* __min__: The minimum value of the slider. Default: `0`.
* __max__: The maximum value of the slider. Default: `100`.
* __step__: The step size of the slider. will al Default: `1`. 
* __inline__: A bool value indicating whether to place the slider inline with text or outside the text. Default: `false`.
* __precision__: The number of digits after the decimal points displayed for the current value, the rounding of the input. The value will be rounded to have no more significant digits than the precision. For example, if one wishes to only use integers, a precision of 10 would be used, while if one wishes to round to the hundreds place, one would use a precision of 0.001. 
* __disabled__: A bool value to indicate whether the slider is active or not. If set to `true`, the slider will be present on the screen, albeit greyed-out. Useful for testing and debugging.
* __onChange__: Callback `function` invoked after each change of the slider value. Default: `null`.

Note that the values of the slider will always be of the form:
<TeX raw="round(defaultValue \ \pm n*step,\ precision)" displayMode={true} />
