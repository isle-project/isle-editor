---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Un componente para reproducir archivos y contenidos multimedia de YouTube, SoundCloud y Vimeo.

## Opciones

* __url__ | `string`: URL del video. Default: `''`.
* __controls__ | `boolean`: indica si se muestran los elementos de control del reproductor de vídeo. Default: `false`.
* __playing__ | `boolean`: indica si se inicia automáticamente la reproducción del vídeo. Default: `false`.
* __volume__ | `number`: volumen del reproductor. Default: `0.8`.
* __center__ | `boolean`: controla si se centra el reproductor de vídeo. Default: `true`.
* __height__ | `(string|number)`: altura del jugador. Default: `360`.
* __width__ | `(string|number)`: ancho del reproductor. Default: `640`.
* __loop__ | `boolean`: controla si se debe iniciar el vídeo de nuevo después de que se haya reproducido. Default: `false`.
* __startTime__ | `number`: número de segundos para iniciar el video, o fracción si el valor está entre 0 y 1. Default: `none`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onEnded__ | `function`: la llamada de retorno invocada una vez que el video termine. Default: `onEnded() {}`.
* __onPause__ | `function`: La llamada de retorno invocada cuando el video se detiene. Default: `onPause() {}`.
* __onPlay__ | `function`: llamada invocada cuando el video comienza o se reanuda después de la pausa. Default: `onPlay() {}`.
* __onStart__ | `function`: La llamada de retorno invocada una vez que el video se pausa. Default: `onStart() {}`.
* __onSeek__ | `function`: llamada de vuelta cuando los medios de comunicación buscan llamado con el parámetro "segundos". Default: `onSeek() {}`.


## Ejemplos

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



