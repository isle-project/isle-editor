---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

A component displaying an image in the style of a polaroid.

## Example

```jsx live
<Polaroid image="Enter URL" />
```



## Options

* __image__ | `string`: the URL of the image to be displayed in the polaroid frame. Default: `none`.
* __removable__ | `boolean`: indicates whether the image is removable when clicking on the pin. Default: `false`.
* __draggable__ | `boolean`: controls whether one can drag the polaroid around the screen. Default: `false`.
* __showPin__ | `boolean`: shows a pin. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onClick__ | `function`: event handler invoked when image is clicked (receives the id of the Polaroid as parameter). Default: `function noop() {
	// Empty function...
}`.
