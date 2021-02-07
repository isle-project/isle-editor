---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Un componente per la riproduzione di file e contenuti multimediali da YouTube, SoundCloud e Vimeo.

## Options

* __url__ | `string`: URL del video. Default: `''`.
* __controls__ | `boolean`: indica se visualizzare gli elementi di controllo del lettore video. Default: `false`.
* __playing__ | `boolean`: indica se avviare automaticamente la riproduzione del video. Default: `false`.
* __volume__ | `number`: volume del giocatore. Default: `0.8`.
* __center__ | `boolean`: controlla se centrare il lettore video. Default: `true`.
* __height__ | `(string|number)`: altezza del giocatore. Default: `360`.
* __width__ | `(string|number)`: larghezza del giocatore. Default: `640`.
* __loop__ | `boolean`: controlla se avviare nuovamente il video dopo che è stato riprodotto. Default: `false`.
* __voiceID__ | `string`: identificatore di controllo vocale. Default: `none`.
* __startTime__ | `number`: numero di secondi a cui avviare il video, o frazione se il valore è compreso tra 0 e 1. Default: `none`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onEnded__ | `function`: richiamata una volta terminato il video. Default: `onEnded() {}`.
* __onPause__ | `function`: richiamata quando il video si interrompe. Default: `onPause() {}`.
* __onPlay__ | `function`: richiamata quando il video inizia o riprende la riproduzione dopo una pausa. Default: `onPlay() {}`.
* __onStart__ | `function`: richiamata una volta che il video si interrompe. Default: `onStart() {}`.
* __onSeek__ | `function`: richiamo quando il media cerca chiamato con il parametro "secondi. Default: `onSeek() {}`.


## Examples

```jsx live
<VideoPlayer
    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"
    playing
/>
```



