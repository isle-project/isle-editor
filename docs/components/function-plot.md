# Function Plot

ISLE component to generate line-plots of functions and/or scatter-plots of individual observations.

Example:

``` html
<FunctionPlot
    data={[
        { fun: Math.sin }
    ]}
    id="myplot"
/>
```

## Options

* __data__: An array of `objects` with either a `fun` or `points` key. `fun` expects a `function` to be plotted, whereas `points` should be an array of arrays of length two holding the (x,y) pairs to be plotted. Required.
* __id__: Unique `string` identifier for the plot to be created. Required.
* __width__: `number` giving the width of the created plot (in px). Default: `250`.
* __height__: `number` giving the height of the created plot (in px). Default: `250`.
* __title__: `string` specifying the title of the plot. Default: `null`.
* __disableZoom__: `boolean` indicating whether zooming should be disabled. Default: `true`.
