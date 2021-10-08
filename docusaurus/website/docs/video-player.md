---
id: video-player
title: Video Player
sidebar_label: Video Player
---

A component for playing media files and content from YouTube, SoundCloud, and Vimeo.

## Options

* __url__ | `string`: URL of the video. Default: `''`.
* __controls__ | `boolean`: indicates whether to display control elements of the video player. Default: `false`.
* __playing__ | `boolean`: indicates whether to automatically start playing the video. Default: `false`.
* __volume__ | `number`: volume of the player. Default: `0.8`.
* __center__ | `boolean`: controls whether to center the video player. Default: `true`.
* __height__ | `(string|number)`: height of the player. Default: `360`.
* __width__ | `(string|number)`: width of the player. Default: `640`.
* __loop__ | `boolean`: controls whether to start the video anew after it was played. Default: `false`.
* __startTime__ | `number`: number of seconds at which to start the video, or fraction if value is between 0 and 1. Default: `none`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onEnded__ | `function`: callback invoked once the video ends. Default: `onEnded() {}`.
* __onPause__ | `function`: callback invoked when the video pauses. Default: `onPause() {}`.
* __onPlay__ | `function`: callback invoked when the video starts or resumes playing after pausing. Default: `onPlay() {}`.
* __onStart__ | `function`: callback invoked once the video pauses. Default: `onStart() {}`.
* __onSeek__ | `function`: callback when media seeks called with `seconds` parameter. Default: `onSeek() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Autoplay', value: 'Autoplay' },
        { label: 'Start Time', value: 'startTime' },
        { label: 'Controlled Size', value: 'controlledSize' },
        { label: 'With Callback on Pause', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<VideoPlayer
    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    playing
    controls
/>
```
</TabItem>

<TabItem value="startTime">

```jsx live
<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
    startTime={28}
/>
```
</TabItem>


<TabItem value="controlledSize">

```jsx live
<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
    width={520}
    height={290}
    style={{ outline: '10px solid orange', boxShadow: '0 6px 12px black'}}
/>
```
</TabItem>


<TabItem value="withCallback">

```jsx live
<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
    onPause={ function(){ alert('Do it again') }}
/>
```
</TabItem>

</Tabs>



