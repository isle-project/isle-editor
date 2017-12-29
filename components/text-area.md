# Text Area

A text area component. Used as a stand-alone component, changes should be handled via the `onChange` attribute. 

#### Example:

``` js
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/text-area/)

#### Options:

* __legend__: `string` to be displayed as the title of te component. Default: `''`.
* __onChange__: Callback `function` invoked after each change of the text value. Default: `null`.
* __placeholder__: 
* __resize__: `boolean` indicating whether the element should be resizable. Default: `false`.
* __rows__: `number` of rows. Default: `5`.
