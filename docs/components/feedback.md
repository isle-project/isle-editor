# Feedback Buttons

Buttons to collect user feedback.

#### Example:

``` js
<FeedbackButtons
    id="my_feedback"
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/feedback/)

#### Options:

* __id__ | `string (required)`: undefined. Default: `none`.
* __confusedMsg__ | `string`: message to be displayed in tooltip for confused button. Default: `'I am confused.'`.
* __feedbackMsg__ | `string`: message to be displayed in tooltip for detailed feedback button. Default: `'I have feedback.'`.
* __understoodMsg__ | `string`: message to be displayed in tooltip for understood button. Default: `'Makes sense.'`.
* __vertical__ | `boolean`: buttons are displayed vertically if set to `true`. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
