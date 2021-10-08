---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Um componente para reproduzir arquivos de mídia e conteúdo do YouTube, SoundCloud, e Vimeo.

## Opções

* __url__ | `string`: URL do vídeo. Default: `''`.
* __controls__ | `boolean`: indica se devem ser exibidos elementos de controle do reprodutor de vídeo. Default: `false`.
* __playing__ | `boolean`: indica se deve começar a reproduzir o vídeo automaticamente. Default: `false`.
* __volume__ | `number`: volume do jogador. Default: `0.8`.
* __center__ | `boolean`: controla se o reprodutor de vídeo deve ser centralizado. Default: `true`.
* __height__ | `(string|number)`: altura do jogador. Default: `360`.
* __width__ | `(string|number)`: largura do jogador. Default: `640`.
* __loop__ | `boolean`: controla se o vídeo deve ser reiniciado após a sua reprodução. Default: `false`.
* __startTime__ | `number`: número de segundos para iniciar o vídeo, ou fração se o valor estiver entre 0 e 1. Default: `none`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onEnded__ | `function`: chamada de retorno invocada quando o vídeo termina. Default: `onEnded() {}`.
* __onPause__ | `function`: chamada de retorno invocada quando o vídeo faz uma pausa. Default: `onPause() {}`.
* __onPlay__ | `function`: chamada de retorno invocada quando o vídeo começa ou retoma a reprodução após uma pausa. Default: `onPlay() {}`.
* __onStart__ | `function`: chamada de retorno invocada quando o vídeo faz uma pausa. Default: `onStart() {}`.
* __onSeek__ | `function`: chamada de retorno quando a mídia procura chamada com o parâmetro `segundos'. Default: `onSeek() {}`.


## Exemplos

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



