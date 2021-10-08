---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

An ISLE component for recording audio, screen and video.

## Options

* __audio__ | `boolean`: indicates whether audio should be recorded. Default: `false`.
* __camera__ | `boolean`: indicates whether webcam should be recorded. Default: `false`.
* __screen__ | `boolean`: indicates whether the screen should be captured. Default: `false`.
* __autostart__ | `boolean`: indicates whether recording should start immediately. Default: `false`.
* __downloadable__ | `boolean`: indicates whether users should be able to download the recording. Default: `false`.
* __uploadable__ | `boolean`: indicates whether users should be able to upload the recording to the server. Default: `false`.
* __bitsPerSecond__ | `number`: bits per second. Default: `1280000`.
* __style__ | `object`: CSS inline styles. Default: `{}`.


## Examples

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



