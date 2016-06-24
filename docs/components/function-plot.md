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

* `data`: An array of `objects` with either a `fun` or `points` key. `fun` expects a `function` to be plotted, whereas `points` should be an array of arrays of length two holding the (x,y) pairs to be plotted. Required.
* `id`: Unique `string` identifier for the plot to be created. Required.
* `width`: `number` giving the width of the created plot (in px). Default: `250`.
* `height`: `number` giving the height of the created plot (in px). Default: `250`.
* `title`: `string` specifying the title of the plot. Default: `null`.
* `disableZoom`: `boolean` indicating whether zooming should be disabled. Default: `true`.
