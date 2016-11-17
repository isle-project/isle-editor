# Switch Components

The Switch component allows the display of one element out of a list of several elements. Users can cycle through the different children of the Switch tag by clicking on the currently displayed one.

#### Example:

``` html
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

#### Options

* __onChange__: Callback `function` invoked when elements are switched. Receives as its first argument `pos` the index of the currently displayed child. Default: `null`
