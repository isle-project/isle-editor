---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

Plotly-Visualisierung.

## Options

* __data__ | `array (required)`: Daten-Array. Default: `none`.
* __draggable__ | `boolean`: steuert, ob der Plot verschiebbar sein soll. Default: `false`.
* __editable__ | `boolean`: steuert, ob Beschriftungen des erstellten Plots editierbar sind. Default: `false`.
* __id__ | `string`: Bauteilkennzeichen. Default: `none`.
* __layout__ | `object`: Plotly-Layoutobjekt. Default: `{}`.
* __config__ | `object`: undefined. Default: `{}`.
* __legendButtons__ | `boolean`: steuert, ob Schaltflächen zum Ändern der Legende angezeigt werden sollen. Default: `true`.
* __meta__ | `object`: Plot-Meta-Informationen. Default: `none`.
* __revision__ | `number`: wenn angegeben, bewirkt, dass die Darstellung aktualisiert wird, wenn der Revisionswert inkrementiert wird. Default: `none`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onAfterPlot__ | `function`: Callback-Funktion, die jedes Mal aufgerufen wird, wenn ein Diagramm gezeichnet wird. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: Callback-Funktion, die aufgerufen wird, wenn ein beliebiges Element angeklickt wird. Default: `onClick() {}`.
* __onInitialized__ | `function`: Callback wird aufgerufen, sobald der Plot initialisiert ist; wird mit figure (Objekt mit drei Schlüsseln, die den Eingabe-Requisiten entsprechen: `data`, `layout` und `frames`) und dem DOM-Knoten `graphDiv` aufgerufen. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: Callback-Funktion, die aufgerufen wird, wenn der Legendeneintrag angeklickt wird. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: Callback-Funktion, die aufgerufen wird, wenn ein Legendenelement doppelt angeklickt wird. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: Callback-Funktion, die aufgerufen wird, wenn Relayout ausgelöst wird. Default: `onRelayout() {}`.
* __onSelected__ | `function`: Callback-Funktion, die aufgerufen wird, wenn Elemente ausgewählt werden. Default: `onSelected() {}`.
* __onShare__ | `function`: Callback-Funktion, die beim Klicken auf die Schaltfläche "Teilen" aufgerufen wird. Default: `none`.
* __removeButtons__ | `boolean`: steuert, ob alle Schaltflächen entfernt werden sollen (abgesehen von der Vollbild-Schaltfläche, falls aktiviert). Default: `false`.
* __toggleFullscreen__ | `boolean`: steuert, ob die Darstellung des Plots im Vollbildmodus möglich sein soll. Default: `true`.


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

