---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Un composant de l'ISLE que les instructeurs peuvent utiliser pour révéler ou cacher de manière sélective le contenu des enfants à tous les étudiants pendant les cours.

## Options

* __message__ | `(string|node)`: message à afficher lorsque le contenu est caché. Default: `none`.
* __show__ | `boolean`: contrôle l'affichage initial des éléments enfantins. Default: `false`.


## Examples

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

