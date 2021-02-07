---
id: pages 
title: Pages
sidebar_label: Pages
---

Un composant de pagination ISLE qui permet à l'utilisateur de se déplacer dans une séquence de pages.

## Options

* __activePage__ | `number`: page active. Default: `1`.
* __disabled__ | `boolean`: contrôle si la barre de navigation est active ou non. Default: `false`.
* __title__ | `string`: titre affiché du conteneur de pages. Default: `''`.
* __pagination__ | `string`: s'il faut indiquer la pagination soit sur le "haut", soit sur le "bas", soit sur les "deux. Default: `'top'`.
* __size__ | `string`: la taille des boutons de pagination (soit "par défaut", "g", "grand", "sm", "petit", "xs" ou "petit"). Default: `'default'`.
* __height__ | `(number|string)`: la hauteur maximale du conteneur. Si une page intégrée est plus haute, une barre de défilement verticale est ajoutée. Default: `none`.
* __voiceID__ | `string`: identificateur de contrôle vocal. Default: `none`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onSelect__ | `function`: Fonction invoquée lorsque le changement actif est modifié. Reçoit le nouvel index de la page active comme seul paramètre. Default: `onSelect() {}`.


## Examples

```jsx live
<Pages title="Pages">
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
        <RShell />
    </div>
</Pages>
``` 



