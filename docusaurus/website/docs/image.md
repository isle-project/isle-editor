---
id: image
title: Image
sidebar_label: Image
---

Component to display an image.

## Example

```jsx live
<Image alt="The Starry Night by Vincent van Gogh" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
```

## Options

* __body__ | `string`: base64 encoded data of image. Default: `none`.
* __className__ | `string`: class name. Default: `''`.
* __height__ | `(number|string)`: image height (in px). Default: `none`.
* __width__ | `(number|string)`: image width (in px). Default: `none`.
* __id__ | `string`: component identifier. Default: `none`.
* __onShare__ | `function`: callback invoked with the image if the "share" button is clicked. Default: `none`.
* __showModal__ | `boolean`: controls whether to display fullscreen modal view. Default: `true`.
* __src__ | `string (required)`: image source location. Default: `none`.
* __alt__ | `string`: image description. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
