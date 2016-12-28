# Text Area

A text area component. Used ss a stand-alone component, changes should be handled via the `onChange` attribute. 

#### Example:

``` js
<TextArea
    legend="Your name"
    defaultValue="Enter text"
/>
```

#### Options:

* __text__: The option the text input is initialized with. Default: `''`.
* __legend__: `string` to be displayed as the title of te component. Default: `''`.
* __onChange__: Callback `function` invoked after each change of the text value. Default: `null`.
A text input component. Usually, this will be used as part of an [ISLE dashboard](dashboard.md), but it can also be used standalone. In this case, you want to handle changes via the `onChange` attribute. 

#### Example:

``` js
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```

#### Options:

* __legend__: `string` to be displayed as the title of te component. Default: `''`.
* __onChange__: Callback `function` invoked after each change of the text value. Default: `null`.
* __placeholder__: 
* __resize__:* `boolean` indicating whether the element should be resizable. Default: `false`.
* __rows__:* `number` of rows. Default: `5`.
