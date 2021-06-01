---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) vizualizare.

## Opțiuni

* __data__ | `array (required)`: matrice de date. Default: `none`.
* __draggable__ | `boolean`: controlează dacă graficul ar trebui să poată fi trasat. Default: `false`.
* __editable__ | `boolean`: controlează dacă etichetele graficului creat sunt editabile sau nu. Default: `false`.
* __id__ | `string`: identificatorul componentei. Default: `none`.
* __layout__ | `object`: Obiect de layout Plotly. Default: `{}`.
* __config__ | `object`: Opțiuni de configurare Plotly (vezi: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: controlează dacă se afișează butoane pentru modificarea legendei. Default: `true`.
* __meta__ | `object`: meta-informații parcelare. Default: `none`.
* __revision__ | `number`: atunci când este furnizat, determină actualizarea graficului atunci când valoarea revizuirii este mărită.. Default: `none`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onAfterPlot__ | `function`: funcție de callback invocată de fiecare dată când se trasează un grafic. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: funcția de callback invocată atunci când se face clic pe orice element. Default: `onClick() {}`.
* __onInitialized__ | `function`: callback invocat odată ce este inițializat complotul; apelat cu figure (obiect cu trei chei care corespund accesoriilor de intrare: `data`, `layout` și `frames`) și nodul DOM `graphDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: funcția de callback invocată atunci când se face clic pe elementul de legendă. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: funcția de callback invocată atunci când elementul de legendă este dublu-clicat. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: funcția de callback invocată atunci când este declanșat relayout. Default: `onRelayout() {}`.
* __onSelected__ | `function`: funcția de callback invocată atunci când elementele sunt selectate. Default: `onSelected() {}`.
* __onShare__ | `function`: funcția callback invocată atunci când se face clic pe butonul "Share" (Partajează). Default: `none`.
* __removeButtons__ | `boolean`: controlează dacă se elimină sau nu toate butoanele (în afară de butonul de ecran complet, dacă este activat). Default: `false`.
* __toggleFullscreen__ | `boolean`: controlează dacă se permite sau nu afișarea graficului în modul "fullscreen".. Default: `true`.


## Exemple

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

