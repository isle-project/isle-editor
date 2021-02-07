---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

Korte visualisatie.

## Options

* __data__ | `array (required)`: gegevensreeks. Default: `none`.
* __draggable__ | `boolean`: controleert of het perceel versleepbaar moet zijn. Default: `false`.
* __editable__ | `boolean`: controleert of de labels van het aangemaakte perceel bewerkbaar zijn. Default: `false`.
* __id__ | `string`: componentenidentificatiecode. Default: `none`.
* __layout__ | `object`: Plattelandshuisvestingsobject. Default: `{}`.
* __config__ | `object`: undefined. Default: `{}`.
* __legendButtons__ | `boolean`: bepaalt of de knoppen voor het wijzigen van de legenda moeten worden weergegeven. Default: `true`.
* __meta__ | `object`: plotmeta-informatie. Default: `none`.
* __revision__ | `number`: wanneer deze wordt verstrekt, zorgt ervoor dat het perceel wordt bijgewerkt wanneer de revisiewaarde wordt verhoogd.. Default: `none`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onAfterPlot__ | `function`: terugbelfunctie die wordt aangeroepen telkens wanneer een grafiek wordt uitgezet. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: terugbelfunctie die wordt aangeroepen wanneer op een element wordt geklikt. Default: `onClick() {}`.
* __onInitialized__ | `function`: callback aangeroepen zodra de plot is geïnitialiseerd; aangeroepen met figuur (object met drie toetsen die overeenkomen met de input props: `data`, `layout`, en `frames`) en het DOM-knooppunt `graphDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: terugbelfunctie die wordt aangeroepen wanneer op het legenda-item wordt geklikt. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: terugbelfunctie ingeroepen bij dubbelklikken op het legenda-item. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: terugbelfunctie die wordt aangeroepen wanneer het relais wordt geactiveerd. Default: `onRelayout() {}`.
* __onSelected__ | `function`: terugbelfunctie die wordt aangeroepen wanneer elementen worden geselecteerd. Default: `onSelected() {}`.
* __onShare__ | `function`: terugbelfunctie ingeroepen bij het klikken op de "Share" knop. Default: `none`.
* __removeButtons__ | `boolean`: regelt of alle knoppen moeten worden verwijderd (behalve de knop met volledig scherm als die is ingeschakeld). Default: `false`.
* __toggleFullscreen__ | `boolean`: bepaalt of het mogelijk is de plot op volledig scherm weer te geven.. Default: `true`.


## Examples

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

