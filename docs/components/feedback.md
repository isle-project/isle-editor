# Feedback Buttons

Attach buttons to collect user feedback for an HTML element identified by its `id`.

Example:

``` html
<span id="myDiv">For me, feedback is collected!</span>
<FeedbackButtons
    for="myDiv"
/>
```

Options:

* `for`: `string` giving the `id` of the HTML element to collect feedback for. Required option.
* `url`: `string` giving the URL to which a POST request is made with the collected user data. Default: `''`.
