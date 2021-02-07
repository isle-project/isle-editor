---
id: slider 
title: Slider
sidebar_label: Slider
---

Un élément qui présente ses enfants dans un diaporama ou un carrousel.

## Options

* __title__ | `string`: titre du diaporama / carrousel à afficher en haut. Default: `''`.
* __dots__ | `boolean`: des points d'affichage en bas pour naviguer rapidement vers une diapositive. Default: `true`.
* __fade__ | `boolean`: contrôle si le fondu enchaîné est utilisé pour la transition entre les diapositives. Default: `false`.
* __draggable__ | `boolean`: contrôle si les utilisateurs peuvent faire glisser les diapositives pour naviguer entre elles. Default: `false`.
* __pagination__ | `string`: s'il faut indiquer la pagination soit sur le "haut", soit sur le "bas", soit sur les "deux. Default: `'bottom'`.
* __goto__ | `number`: Si la propriété est modifiée, la composante saute à la diapositive avec l'index sélectionné. Default: `0`.
* __infinite__ | `boolean`: contrôle si le diaporama s'enroule autour de son contenu. Default: `false`.
* __interval__ | `number`: fixe un intervalle de temps pour un changement automatique de diapositive. Default: `none`.
* __swipe__ | `boolean`: permet un comportement de glisser/déposer. Default: `false`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onClick__ | `function`: rappel invoqué lors du clic sur les boutons suivant / précédent. Default: `onClick() {}`.


## Examples

```jsx live
<Slider title="Questions to explore:" >
    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>
    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>
    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>
    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>
</Slider>
```

