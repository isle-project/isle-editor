# Text Input

A text input component. Usually, this will be used as part of an [ISLE dashboard](dashboard.md), but it can also be used standalone. In this case, you want to handle changes via the `onChange` attribute. 

#### Example:

``` js
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/text-input/)

#### Options:

* __defaultValue__: The text input is initialized with. Default: `''`.
* __inline__: `boolean` indicating whether the element should be displayed inline. Default: `false`.
* __legend__: `string` to be displayed as the title of te component. Default: `''`.
* __onChange__: Callback `function` invoked after each change of the text value. Default: `null`.
* __width__: width of the text input field in pixels. Default: `80`.
