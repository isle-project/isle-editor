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

* __for__: `string` giving the `id` of the HTML element to collect feedback for. Required option.
* __url__: `string` giving the URL to which a POST request is made with the collected user data. Default: `''`.
