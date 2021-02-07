---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

A video lecture component that displays videos interspersed with interactive elements.

## Options

* __controls__ | `boolean`: indicates whether to display control elements of the video players. Default: `true`.
* __instructorView__ | `boolean`: controls whether to include instructor view. Default: `true`.
* __linkToDashboard__ | `boolean`: controls whether to display a link to the dashboard once completing the video lecture. Default: `false`.
* __steps__ | `array (required)`: array of video URLs and components to be displayed in-between. Default: `none`.
* __videoWidth__ | `(string|number)`: video width. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: video height. Default: `'98vh'`.
* __style__ | `object`: CSS inline style. Default: `{}`.


## Examples

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

