# Feedback Buttons

Attach buttons to collect user feedback for an HTML element identified by its `id`.

#### Example:

``` js
<span id="myDiv">For me, feedback is collected!</span>
<FeedbackButtons
    for="myDiv"
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/feedback/)

#### Options:

* __for__ | `string (required)`: id of the component for which feedback shall be collected. `Default: none.`
* __vertical__ | `boolean`: buttons are displayed vertically if set to `true`. `Default: false.`
