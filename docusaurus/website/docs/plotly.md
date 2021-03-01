---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) visualization.

## Options

* __data__ | `array (required)`: data array. Default: `none`.
* __draggable__ | `boolean`: controls whether the plot should be draggable. Default: `false`.
* __editable__ | `boolean`: controls whether labels of the created plot are editable. Default: `false`.
* __id__ | `string`: component identifier. Default: `none`.
* __layout__ | `object`: Plotly layout object. Default: `{}`.
* __config__ | `object`: Plotly configuration options (see: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: controls whether to display buttons for changing the legend. Default: `true`.
* __meta__ | `object`: plot meta-information. Default: `none`.
* __revision__ | `number`: when provided, causes the plot to update when the revision value is incremented. Default: `none`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onAfterPlot__ | `function`: callback function invoked each time a chart is plotted. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: callback function invoked when any element is clicked. Default: `onClick() {}`.
* __onInitialized__ | `function`: callback invoked once plot is initialized; called with figure (object with three keys corresponding to input props: `data`, `layout`, and `frames`) and the DOM node `graphDiv`. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: callback function invoked when legend item is clicked. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: callback function invoked when legend item is double-clicked. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: callback function invoked when relayout is triggered. Default: `onRelayout() {}`.
* __onSelected__ | `function`: callback function invoked when elements are selected. Default: `onSelected() {}`.
* __onShare__ | `function`: callback function invoked when clicking on the "Share" button. Default: `none`.
* __removeButtons__ | `boolean`: controls whether to remove all buttons (aside from fullscreen button if enabled). Default: `false`.
* __toggleFullscreen__ | `boolean`: controls whether to allow displaying the plot in fullscreen mode. Default: `true`.


## Examples

```jsx live
<Plotly
    data={[{
        values: [ 24, 7, 0.5 ],
        labels: [ 'English', 'Spanish', 'Other' ],
        type: 'pie'
            }]}
    layout={{ width: 300 }}
/>
```

