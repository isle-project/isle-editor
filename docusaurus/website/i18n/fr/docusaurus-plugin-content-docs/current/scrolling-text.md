---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Un élément d'arrière-plan dynamique qui parcourt une liste de textes à un intervalle déterminé.

## Options

* __list__ | `array<string>`: liste des textes à afficher. Default: `[]`.
* __loop__ | `boolean`: indique si le processus doit être affiché à l'infini. Default: `false`.
* __direction__ | `string`: la direction du flux de texte (soit "à gauche", "à droite", "en haut", "en bas", "à la trace", "au foyer", ou "en rotation"). Default: `'right'`.
* __still__ | `number`: le temps d'immobilisation du texte (en secondes). Default: `3`.
* __interval__ | `number`: l'intervalle entre les appels (en secondes). Default: `15`.
* __inTime__ | `number`: durée de l'effet d'entrée (en secondes). Default: `0.6`.
* __outTime__ | `number`: durée de l'effet de sortie (en secondes). Default: `1`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Les styles CSS du texte. Default: `{}`.


## Examples

```jsx live
<ScrollingText
    list={[ 'Heading' ]}
    style={{ fontSize: 44, color: 'red' }}
    interval={5}
    inTime={1.2}
    outTime={1.2}
    still={2}
/>
```



