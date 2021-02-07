---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

A component displaying an image in the style of a polaroid.

## Options

* __image__ | `string`: the URL of the image to be displayed in the polaroid frame. Default: `none`.
* __draggable__ | `boolean`: controls whether one can drag the polaroid around the screen. Default: `false`.
* __showPin__ | `boolean`: shows a pin. Default: `false`.
* __width__ | `number`: polaroid width (in px). Default: `350`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onClick__ | `function`: event handler invoked when image is clicked (receives the id of the Polaroid as parameter). Default: `none`.


## Examples

```jsx live
<Polaroid image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/747px-Beethoven.jpg" />
```

