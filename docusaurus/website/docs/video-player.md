---
id: video-player
title: Video Player
sidebar_label: Video Player
---

A component for playing media files and content from YouTube, SoundCloud, and Vimeo.

## Example

```jsx live
<VideoPlayer
    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"
    playing
/>
```



## Options

* __url__ | `string`: URL of the video. Default: `''`.
* __controls__ | `boolean`: indicates whether to display control elements of the video player. Default: `false`.
* __playing__ | `boolean`: indicates whether to automatically start playing the video. Default: `false`.
* __volume__ | `number`: volume of the player. Default: `0.8`.
* __center__ | `boolean`: controls whether to center the video player. Default: `true`.
* __height__ | `(string|number)`: height of the player. Default: `360`.
* __width__ | `(string|number)`: width of the player. Default: `640`.
* __loop__ | `boolean`: controls whether to start the video anew after it was played. Default: `false`.
* __voiceID__ | `string`: voice control identifier. Default: `none`.
* __startTime__ | `number`: number of seconds at which to start the video, or fraction if value is between 0 and 1. Default: `none`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onEnded__ | `function`: callback invoked once the video ends. Default: `onEnded() {}`.
* __onPause__ | `function`: callback invoked when the video pauses. Default: `onPause() {}`.
* __onPlay__ | `function`: callback invoked when the video starts or resumes playing after pausing. Default: `onPlay() {}`.
* __onStart__ | `function`: callback invoked once the video pauses. Default: `onStart() {}`.
* __onSeek__ | `function`: callback when media seeks called with `seconds` parameter. Default: `onSeek() {}`.
