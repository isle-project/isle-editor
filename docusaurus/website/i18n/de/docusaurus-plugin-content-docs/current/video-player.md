---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Eine Komponente zur Wiedergabe von Mediendateien und Inhalten von YouTube, SoundCloud und Vimeo.

## Options

* __url__ | `string`: URL des Videos. Default: `''`.
* __controls__ | `boolean`: gibt an, ob Bedienelemente des Videoplayers angezeigt werden sollen. Default: `false`.
* __playing__ | `boolean`: gibt an, ob die Wiedergabe des Videos automatisch gestartet werden soll. Default: `false`.
* __volume__ | `number`: Lautstärke des Players. Default: `0.8`.
* __center__ | `boolean`: steuert, ob der Videoplayer zentriert werden soll. Default: `true`.
* __height__ | `(string|number)`: Höhe des Players. Default: `360`.
* __width__ | `(string|number)`: Breite des Players. Default: `640`.
* __loop__ | `boolean`: steuert, ob das Video nach dem Abspielen neu gestartet werden soll. Default: `false`.
* __voiceID__ | `string`: Kennung der Sprachsteuerung. Default: `none`.
* __startTime__ | `number`: Anzahl der Sekunden, bei denen das Video gestartet werden soll, oder Bruchteil, wenn der Wert zwischen 0 und 1 liegt. Default: `none`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onEnded__ | `function`: Callback, der aufgerufen wird, sobald das Video endet. Default: `onEnded() {}`.
* __onPause__ | `function`: Callback, der aufgerufen wird, wenn das Video pausiert. Default: `onPause() {}`.
* __onPlay__ | `function`: Callback, der aufgerufen wird, wenn das Video startet oder die Wiedergabe nach dem Anhalten wieder aufgenommen wird. Default: `onPlay() {}`.
* __onStart__ | `function`: Callback, der aufgerufen wird, sobald das Video pausiert. Default: `onStart() {}`.
* __onSeek__ | `function`: Callback, wenn Mediensuchen mit Parameter `Sekunden` aufgerufen werden. Default: `onSeek() {}`.


## Examples

```jsx live
<VideoPlayer
    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"
    playing
/>
```



