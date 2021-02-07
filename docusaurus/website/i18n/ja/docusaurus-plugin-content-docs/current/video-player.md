---
id: video-player
title: Video Player
sidebar_label: Video Player
---

YouTube、SoundCloud、Vimeoのメディアファイルやコンテンツを再生するためのコンポーネント。

## Options

* __url__ | `string`: 動画のURL. Default: `''`.
* __controls__ | `boolean`: は、ビデオプレーヤの制御要素を表示するかどうかを示します。. Default: `false`.
* __playing__ | `boolean`: は、ビデオの再生を自動的に開始するかどうかを示します。. Default: `false`.
* __volume__ | `number`: プレイヤーボリューム. Default: `0.8`.
* __center__ | `boolean`: ビデオプレーヤーを中央に配置するかどうかを制御します。. Default: `true`.
* __height__ | `(string|number)`: 選手の身長. Default: `360`.
* __width__ | `(string|number)`: プレーヤーの幅. Default: `640`.
* __loop__ | `boolean`: 動画を再生した後に新たに動画を開始するかどうかを制御します。. Default: `false`.
* __voiceID__ | `string`: 音声制御識別子. Default: `none`.
* __startTime__ | `number`: 動画を開始する秒数、0 から 1 の間の値の場合は端数。. Default: `none`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onEnded__ | `function`: コールバック. Default: `onEnded() {}`.
* __onPause__ | `function`: 一時停止時に呼び出されるコールバック. Default: `onPause() {}`.
* __onPlay__ | `function`: 一時停止後、動画の再生が開始または再開されたときに呼び出されるコールバック. Default: `onPlay() {}`.
* __onStart__ | `function`: 一時停止時に呼び出されるコールバック. Default: `onStart() {}`.
* __onSeek__ | `function`: メディアシークが `seconds` パラメータで呼び出されたときのコールバック. Default: `onSeek() {}`.


## Examples

```jsx live
<VideoPlayer
    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"
    playing
/>
```



