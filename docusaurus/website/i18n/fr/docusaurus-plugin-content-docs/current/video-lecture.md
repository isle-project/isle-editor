---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Un composant de lecture vidéo qui affiche des vidéos intercalées d'éléments interactifs.

## Options

* __controls__ | `boolean`: indique s'il faut afficher les éléments de contrôle des lecteurs vidéo. Default: `true`.
* __instructorView__ | `boolean`: contrôle l'inclusion ou non de la vue de l'instructeur. Default: `true`.
* __linkToDashboard__ | `boolean`: contrôle l'affichage d'un lien vers le tableau de bord une fois la conférence vidéo terminée. Default: `false`.
* __steps__ | `array (required)`: une série d'URL et de composants vidéo à afficher entre les deux. Default: `none`.
* __videoWidth__ | `(string|number)`: largeur de la vidéo. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: hauteur de la vidéo. Default: `'98vh'`.
* __style__ | `object`: Style CSS en ligne. Default: `{}`.


## Examples

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

