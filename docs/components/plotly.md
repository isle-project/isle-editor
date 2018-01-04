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

#### Options

* __data__:  An array of arrays of type `data` with various tags. These tags mirror the `plotly` functionality in the R wrapper for the HTML syntax.
* __layout__: An array of dimension attributes.
