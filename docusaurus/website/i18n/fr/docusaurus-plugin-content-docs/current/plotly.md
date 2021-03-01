---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

Visualisation graphique.

## Options

* __data__ | `array (required)`: tableau de données. Default: `none`.
* __draggable__ | `boolean`: contrôle si la parcelle doit pouvoir être traînée. Default: `false`.
* __editable__ | `boolean`: contrôle si les étiquettes de la parcelle créée sont modifiables. Default: `false`.
* __id__ | `string`: identifiant du composant. Default: `none`.
* __layout__ | `object`: Objet de tracé. Default: `{}`.
* __config__ | `object`: Options de configuration graphique (voir : https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: contrôle de l'affichage des boutons de modification de la légende. Default: `true`.
* __meta__ | `object`: méta-information sur les parcelles. Default: `none`.
* __revision__ | `number`: lorsqu'il est fourni, entraîne la mise à jour de la parcelle lorsque la valeur de révision est incrémentée. Default: `none`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onAfterPlot__ | `function`: fonction de rappel invoquée à chaque fois qu'un graphique est tracé. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: la fonction de rappel est invoquée lorsque l'on clique sur un élément. Default: `onClick() {}`.
* __onInitialized__ | `function`: callback invoqué une fois que le tracé est initialisé ; appelé avec figure (objet avec trois clés correspondant aux accessoires d'entrée : "data", "layout", et "frames") et le noeud DOM "graphDiv".. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: fonction de rappel invoquée lorsque l'élément de légende est cliqué. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: fonction de rappel invoquée lorsque l'élément de légende est double-cliqué. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: la fonction de rappel est invoquée lorsque le relais est déclenché. Default: `onRelayout() {}`.
* __onSelected__ | `function`: fonction de rappel invoquée lorsque des éléments sont sélectionnés. Default: `onSelected() {}`.
* __onShare__ | `function`: fonction de rappel invoquée en cliquant sur le bouton "Partager. Default: `none`.
* __removeButtons__ | `boolean`: contrôle si tous les boutons doivent être supprimés (sauf le bouton plein écran s'il est activé). Default: `false`.
* __toggleFullscreen__ | `boolean`: contrôle si l'affichage de la parcelle en mode plein écran est autorisé. Default: `true`.


## Exemples

```jsx live
<Plotly
    data={[{
        values: [ 24, 7, 0.5 ],
        labels: [ 'English', 'Spanish', 'Other' ],
        type: 'pie'
            }]}
    layout={{ width: 300 }}
/>
```

