---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Компонент за възпроизвеждане на мултимедийни файлове и съдържание от YouTube, SoundCloud и Vimeo.

## Опции

* __url__ | `string`: URL адрес на видеоклипа. Default: `''`.
* __controls__ | `boolean`: указва дали да се показват елементите за управление на видеоплейъра. Default: `false`.
* __playing__ | `boolean`: показва дали да се започне автоматично възпроизвеждане на видеоклипа. Default: `false`.
* __volume__ | `number`: сила на звука на плейъра. Default: `0.8`.
* __center__ | `boolean`: контролира дали да се центрира видео плейърът. Default: `true`.
* __height__ | `(string|number)`: височина на играча. Default: `360`.
* __width__ | `(string|number)`: ширина на играча. Default: `640`.
* __loop__ | `boolean`: контролира дали видеото да се стартира наново, след като е било възпроизведено.. Default: `false`.
* __startTime__ | `number`: брой секунди, от които се стартира видеото, или дроб, ако стойността е между 0 и 1. Default: `none`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onEnded__ | `function`: обратна връзка, задействана след края на видеото. Default: `onEnded() {}`.
* __onPause__ | `function`: обратна връзка, задействана при спиране на видеото. Default: `onPause() {}`.
* __onPlay__ | `function`: обратна връзка, задействана при стартиране или възобновяване на възпроизвеждането на видеото след пауза. Default: `onPlay() {}`.
* __onStart__ | `function`: обратна връзка, задействана, след като видеото спре на пауза. Default: `onStart() {}`.
* __onSeek__ | `function`: обратна връзка, когато медийните търсения се извикват с параметър `seconds`. Default: `onSeek() {}`.


## Примери

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



