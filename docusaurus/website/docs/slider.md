---
id: slider 
title: Slider
sidebar_label: Slider
---

A component which displays its children in a slideshow or carousel.

## Options

* __title__ | `string`: title for the slideshow / carousel to be displayed at its top. Default: `''`.
* __dots__ | `boolean`: display dots at the bottom for quickly navigating to any slide. Default: `true`.
* __fade__ | `boolean`: controls whether fading is used for transitioning between the slides. Default: `false`.
* __draggable__ | `boolean`: controls whether users can drag the slides to navigate between them. Default: `false`.
* __pagination__ | `string`: whether to show the pagination either on the `top`, `bottom`, or `both. Default: `'bottom'`.
* __goto__ | `number`: If property is changed, the component jumps to the slide with the selected index. Default: `0`.
* __infinite__ | `boolean`: controls whether the slideshow wraps around it's contents. Default: `false`.
* __interval__ | `number`: sets a time interval for an automatic slide change. Default: `none`.
* __swipe__ | `boolean`: enables drag/swipe behavior. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onClick__ | `function`: callback invoked when clicking on the next/previous buttons. Default: `onClick() {}`.


## Examples

```jsx live
<Slider title="Questions to explore:" >
    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>
    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>
    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>
    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>
</Slider>
```

