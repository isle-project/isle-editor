---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

Un composant ISLE pour l'enregistrement audio, écran et vidéo.

## Options

* __audio__ | `boolean`: indique si l'audio doit être enregistré. Default: `false`.
* __camera__ | `boolean`: indique si la webcam doit être enregistrée. Default: `false`.
* __screen__ | `boolean`: indique si l'écran doit être capturé. Default: `false`.
* __autostart__ | `boolean`: indique si l'enregistrement doit commencer immédiatement. Default: `false`.
* __downloadable__ | `boolean`: indique si les utilisateurs doivent pouvoir télécharger l'enregistrement. Default: `false`.
* __uploadable__ | `boolean`: indique si les utilisateurs doivent pouvoir télécharger l'enregistrement sur le serveur. Default: `false`.
* __bitsPerSecond__ | `number`: bits par seconde. Default: `1280000`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



