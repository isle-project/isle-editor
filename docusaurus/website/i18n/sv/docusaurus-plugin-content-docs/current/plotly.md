---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) visualisering.

## Alternativ

* __data__ | `array (required)`: datamatriser. Default: `none`.
* __draggable__ | `boolean`: kontrollerar om plottet ska kunna dras.. Default: `false`.
* __editable__ | `boolean`: kontrollerar om etiketter i den skapade plotten kan redigeras. Default: `false`.
* __id__ | `string`: komponentidentifierare.. Default: `none`.
* __layout__ | `object`: Plotly layoutobjekt. Default: `{}`.
* __config__ | `object`: Konfigurationsalternativ för Plotly (se: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: kontrollerar om knappar för att ändra legenden ska visas. Default: `true`.
* __meta__ | `object`: utforma metainformation.. Default: `none`.
* __revision__ | `number`: när den anges, gör att plottet uppdateras när revisionsvärdet ökas.. Default: `none`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onAfterPlot__ | `function`: callback-funktion som anropas varje gång ett diagram plottas.. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: callback-funktion som aktiveras när ett element klickas. Default: `onClick() {}`.
* __onInitialized__ | `function`: callback som anropas när plotten initieras; anropas med figur (objekt med tre nycklar som motsvarar inmatningsrekvisit: `data`, `layout` och `frames`) och DOM-noden `graphDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: callback-funktion som anropas när det klickas på en legend. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: callback-funktion som anropas när en legend dubbelklickas. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: callback-funktion som anropas när relayout utlöses.. Default: `onRelayout() {}`.
* __onSelected__ | `function`: callback-funktion som anropas när element väljs. Default: `onSelected() {}`.
* __onShare__ | `function`: callback-funktion som aktiveras när man klickar på knappen "Dela".. Default: `none`.
* __removeButtons__ | `boolean`: kontrollerar om alla knappar ska tas bort (förutom fullskärmsknappen om den är aktiverad). Default: `false`.
* __toggleFullscreen__ | `boolean`: kontrollerar om det ska vara tillåtet att visa tomten i fullskärmsläge. Default: `true`.


## Exempel

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

