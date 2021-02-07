---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Composant plaçant une balise dans la leçon, soit de manière indépendante, soit attachée à une "cible". En survolant ou en cliquant sur la balise, une info-bulle s'affiche.

## Options

* __title__ | `(string|node)`: titre à afficher en haut de l'infobulle. Default: `none`.
* __content__ | `(string|node)`: contenu de l'infobulle. Default: `'`content` comes here...'`.
* __event__ | `string`: si elle est définie sur "clic", l'info-bulle est activée en cliquant sur la balise ; si elle est définie sur "survol", l'info-bulle est activée par le survol. Default: `'click'`.
* __placement__ | `string`: le placement de l'info-bulle par rapport à la "cible" (soit "haut", "début haut", "fin haut", "bas", "fin bas", "gauche", "début gauche", "fin gauche", "droite", "début droite", "fin droite", "automatique" ou "centre"). Default: `'left'`.
* __target__ | `string`: Sélecteur de classe ou d'ID pour l'élément auquel attacher l'info-bulle. Default: `''`.
* __offset__ | `number`: la distance entre l'info-bulle et la "cible" en pixels. Default: `15`.
* __onChange__ | `function`: rappel invoqué lors du changement d'état de l'infobulle. Reçoit deux arguments : l'action (open ou close) et les props passés. Default: `onChange() {}`.


## Examples

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



