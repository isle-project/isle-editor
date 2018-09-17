# Switch Components

The Switch component allows the display of one element out of a list of several elements. Users can cycle through the different children of the Switch tag by clicking on the currently displayed one.

#### Example:

``` js
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/switch/)

#### Options:

* __tooltip__ | `string`: tooltip displayed when hovering over the switch element. Default: `'Click to cycle through available options.'`.
* __tooltipPos__ | `string`: placement of the tooltip (either `top`, `left`, `right`, or `bottom`). Default: `'top'`.
* __className__ | `string`: class name for the enclosing span element. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: callback invoked when elements are switched. Receives as its first argument the index of the currently displayed child. Default: `onChange() {}`.
