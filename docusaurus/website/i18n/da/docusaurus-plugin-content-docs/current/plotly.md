---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) visualisering.

## Indstillinger

* __data__ | `array (required)`: datamatrix. Default: `none`.
* __draggable__ | `boolean`: styrer, om plottet skal kunne trækkes. Default: `false`.
* __editable__ | `boolean`: kontrollerer, om etiketterne på det oprettede plot kan redigeres. Default: `false`.
* __id__ | `string`: komponent-id. Default: `none`.
* __layout__ | `object`: Plotly-layoutobjekt. Default: `{}`.
* __config__ | `object`: Konfigurationsmuligheder for Plotly (se: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: kontrollerer, om der skal vises knapper til ændring af legenden. Default: `true`.
* __meta__ | `object`: plotmetainformationer. Default: `none`.
* __revision__ | `number`: hvis angivet, får plottet til at blive opdateret, når revisionsværdien øges. Default: `none`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onAfterPlot__ | `function`: callback-funktion, der påkaldes hver gang et diagram plottes. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: callback-funktion, der påkaldes, når der klikkes på et element. Default: `onClick() {}`.
* __onInitialized__ | `function`: callback, der kaldes, når plot er initialiseret; kaldes med figur (objekt med tre nøgler, der svarer til inputprops: `data`, `layout` og `frames`) og DOM-knuden `graphDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: callback-funktion, der påkaldes, når der klikkes på et element i legenden. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: callback-funktion, der påkaldes, når der dobbeltklikkes på et element i legenden. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: callback-funktion, der påkaldes, når relayout er udløst. Default: `onRelayout() {}`.
* __onSelected__ | `function`: callback-funktion, der påkaldes, når der vælges elementer. Default: `onSelected() {}`.
* __onShare__ | `function`: callback-funktion, der kaldes, når der klikkes på knappen "Del". Default: `none`.
* __removeButtons__ | `boolean`: styrer, om alle knapper skal fjernes (bortset fra knappen for fuld skærm, hvis den er aktiveret). Default: `false`.
* __toggleFullscreen__ | `boolean`: kontrollerer, om plot skal kunne vises i fuldskærmstilstand. Default: `true`.


## Eksempler

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

