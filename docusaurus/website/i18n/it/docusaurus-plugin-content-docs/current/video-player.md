---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Un componente per la riproduzione di file e contenuti multimediali da YouTube, SoundCloud e Vimeo.

## Opzioni

* __url__ | `string`: URL del video. Default: `''`.
* __controls__ | `boolean`: indica se visualizzare gli elementi di controllo del lettore video. Default: `false`.
* __playing__ | `boolean`: indica se avviare automaticamente la riproduzione del video. Default: `false`.
* __volume__ | `number`: volume del giocatore. Default: `0.8`.
* __center__ | `boolean`: controlla se centrare il lettore video. Default: `true`.
* __height__ | `(string|number)`: altezza del giocatore. Default: `360`.
* __width__ | `(string|number)`: larghezza del giocatore. Default: `640`.
* __loop__ | `boolean`: controlla se avviare nuovamente il video dopo che è stato riprodotto. Default: `false`.
* __startTime__ | `number`: numero di secondi a cui avviare il video, o frazione se il valore è compreso tra 0 e 1. Default: `none`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onEnded__ | `function`: richiamata una volta terminato il video. Default: `onEnded() {}`.
* __onPause__ | `function`: richiamata quando il video si interrompe. Default: `onPause() {}`.
* __onPlay__ | `function`: richiamata quando il video inizia o riprende la riproduzione dopo una pausa. Default: `onPlay() {}`.
* __onStart__ | `function`: richiamata una volta che il video si interrompe. Default: `onStart() {}`.
* __onSeek__ | `function`: richiamo quando il media cerca chiamato con il parametro "secondi. Default: `onSeek() {}`.


## Esempi

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



