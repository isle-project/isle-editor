---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Un composant permettant de lire des fichiers et du contenu multimédia de YouTube, SoundCloud et Vimeo.

## Options

* __url__ | `string`: URL de la vidéo. Default: `''`.
* __controls__ | `boolean`: indique s'il faut afficher les éléments de contrôle du lecteur vidéo. Default: `false`.
* __playing__ | `boolean`: indique s'il faut lancer automatiquement la lecture de la vidéo. Default: `false`.
* __volume__ | `number`: le volume du lecteur. Default: `0.8`.
* __center__ | `boolean`: contrôle s'il faut centrer le lecteur vidéo. Default: `true`.
* __height__ | `(string|number)`: la hauteur du joueur. Default: `360`.
* __width__ | `(string|number)`: largeur du joueur. Default: `640`.
* __loop__ | `boolean`: contrôle si la vidéo doit être relancée après sa diffusion. Default: `false`.
* __startTime__ | `number`: le nombre de secondes auxquelles il faut démarrer la vidéo, ou une fraction si la valeur est comprise entre 0 et 1. Default: `none`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onEnded__ | `function`: rappel invoqué une fois la vidéo terminée. Default: `onEnded() {}`.
* __onPause__ | `function`: rappel invoqué lorsque la vidéo s'arrête. Default: `onPause() {}`.
* __onPlay__ | `function`: rappel invoqué lorsque la vidéo démarre ou reprend la lecture après une pause. Default: `onPlay() {}`.
* __onStart__ | `function`: rappel invoqué une fois la vidéo en pause. Default: `onStart() {}`.
* __onSeek__ | `function`: rappel lorsque le média cherche appelé avec le paramètre "secondes. Default: `onSeek() {}`.


## Exemples

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



