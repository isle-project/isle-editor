---
id: video-player
title: Video Player
sidebar_label: Video Player
---

一个用于播放YouTube、SoundCloud和Vimeo的媒体文件和内容的组件。

## 选项

* __url__ | `string`: 视频的URL. Default: `''`.
* __controls__ | `boolean`: 表示是否显示视频播放器的控制元素。. Default: `false`.
* __playing__ | `boolean`: 表示是否自动开始播放视频. Default: `false`.
* __volume__ | `number`: 播放器的音量. Default: `0.8`.
* __center__ | `boolean`: 控制是否将视频播放器居中. Default: `true`.
* __height__ | `(string|number)`: 球员身高. Default: `360`.
* __width__ | `(string|number)`: 球员宽度. Default: `640`.
* __loop__ | `boolean`: 控制是否在视频播放完毕后重新开始播放。. Default: `false`.
* __startTime__ | `number`: 视频开始的秒数，如果值在0和1之间，则为分数。. Default: `none`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onEnded__ | `function`: 视频结束后调用回调. Default: `onEnded() {}`.
* __onPause__ | `function`: 当视频暂停时调用回调. Default: `onPause() {}`.
* __onPlay__ | `function`: 暂停后视频开始或继续播放时调用回调。. Default: `onPlay() {}`.
* __onStart__ | `function`: 视频暂停时调用回调. Default: `onStart() {}`.
* __onSeek__ | `function`: 当用 "秒 "参数调用媒体搜索时，回调。. Default: `onSeek() {}`.


## 例子

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



