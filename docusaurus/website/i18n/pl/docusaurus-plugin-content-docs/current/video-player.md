---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Komponent do odtwarzania plików multimedialnych i treści z serwisów YouTube, SoundCloud i Vimeo.

## Options

* __url__ | `string`: URL filmu. Default: `''`.
* __controls__ | `boolean`: wskazuje, czy mają być wyświetlane elementy sterujące odtwarzacza wideo. Default: `false`.
* __playing__ | `boolean`: wskazuje, czy należy automatycznie rozpocząć odtwarzanie wideo. Default: `false`.
* __volume__ | `number`: głośność odtwarzacza. Default: `0.8`.
* __center__ | `boolean`: kontroluje, czy odtwarzacz wideo ma być wyśrodkowany. Default: `true`.
* __height__ | `(string|number)`: wysokość zawodnika. Default: `360`.
* __width__ | `(string|number)`: szerokość zawodnika. Default: `640`.
* __loop__ | `boolean`: kontroluje, czy po odtworzeniu wideo ma być ono uruchamiane od nowa. Default: `false`.
* __voiceID__ | `string`: identyfikator kontroli głosowej. Default: `none`.
* __startTime__ | `number`: liczba sekund, po których można rozpocząć odtwarzanie wideo lub ułamek, jeśli wartość mieści się w przedziale od 0 do 1. Default: `none`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onEnded__ | `function`: wywołanie zwrotne po zakończeniu wideo. Default: `onEnded() {}`.
* __onPause__ | `function`: Oddzwonienie wywołane w przypadku przerwy w nagrywaniu wideo. Default: `onPause() {}`.
* __onPlay__ | `function`: oddzwonienie wywołane przy rozpoczęciu lub wznowieniu odtwarzania po pauzie. Default: `onPlay() {}`.
* __onStart__ | `function`: oddzwonienie wywołane po przerwie w oglądaniu filmu. Default: `onStart() {}`.
* __onSeek__ | `function`: wywołanie zwrotne, gdy media poszukują wywołania z parametrem `sekundy'.. Default: `onSeek() {}`.


## Examples

```jsx live
<VideoPlayer
    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"
    playing
/>
```



