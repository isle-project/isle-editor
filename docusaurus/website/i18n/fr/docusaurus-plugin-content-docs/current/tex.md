---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` est un élément ISLE qui peut être utilisé pour afficher des équations LaTeX. Sous le capot, le composant utilise [KaTeX] (https://github.com/Khan/KaTeX) pour un rendu ultra rapide.

## Options

* __raw__ | `(string|number) (required)`: La "chaîne" LaTeX littérale à rendre. Accepte également les `numéros`. Default: `none`.
* __displayMode__ | `boolean`: booléen" indiquant s'il faut afficher l'équation en ligne ou en mode d'affichage. Default: `false`.
* __numbered__ | `boolean`: contrôle l'affichage ou non d'un numéro d'équation pour les équations du mode d'affichage. Default: `false`.
* __style__ | `object`: objet" avec des paires clé-valeur CSS à appliquer au conteneur de l'équation. Default: `{}`.
* __tag__ | `string`: Les caractères personnalisés affichés pour les équations d'affichage sur le côté droit. Par défaut, le numéro de l'équation à l'intérieur de la leçon. Default: `none`.
* __elems__ | `object`: objet" avec des "clés" désignant des caractères LaTeX et leurs valeurs correspondantes étant des "objets" de configuration pour les rendre interactifs. La définition d'une option "tooltip" affichera une info-bulle lors du survol des caractères LaTeX. La définition d'une propriété `variable` affichera un curseur d'entrée pour changer la variable d'état respective ; dans ce cas, les propriétés supplémentaires `legend`, `min`, `max`, et `step` sont supportées. Default: `{}`.
* __popoverPlacement__ | `string`: la position du popover pour les "éléments" spécifiés (soit `top`, `right`, `bottom` ou `left`). Default: `'bottom'`.
* __onPopover__ | `function`: fonction de rappel lorsqu'un popover de contrôle est activé ou désactivé ; reçoit le statut d'affichage comme un booléen comme seul argument. Default: `onPopover() {}`.
* __onClick__ | `function`: la "fonction" de rappel est invoquée chaque fois qu'un utilisateur clique sur l'équation. Default: `none`.


## Exemples

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



