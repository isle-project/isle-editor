# Plotly

The `plotly` function is a generic plotting function used to handle multiple types of data; primarily count-based data. The function furthermore allows for swift integration of plotting functionality in js.

``` js
<Plotly
    data={[{
        values: [ 24, 7, 0.5 ],
        labels: [ 'English', 'Spanish', 'Other' ],
        type: 'pie'
            }]}
    layout={{ width: 300 }}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/plotly)

#### Options:

* __data__ | `array (required)`: data array. Default: `none`.
* __draggable__ | `boolean`: controls whether the plot should be draggable. Default: `false`.
* __editable__ | `boolean`: controls whether labels of the created plot are editable. Default: `false`.
* __id__ | `string`: component identifier. Default: `none`.
* __layout__ | `object`: Plotly layout object. Default: `{}`.
* __legendButtons__ | `boolean`: controls whether to display buttons for changing the legend. Default: `true`.
* __onSelected__ | `function`: callback function invoked when elements are selected. Default: `onSelected() {}`.
* __onShare__ | `function`: callback function invoked when clicking on the "Share" button. Default: `none`.
* __removeButtons__ | `boolean`: controls whether to remove all buttons. Default: `false`.
* __toggleFullscreen__ | `boolean`: controls whether to display the plot in fullscreen mode. Default: `true`.
