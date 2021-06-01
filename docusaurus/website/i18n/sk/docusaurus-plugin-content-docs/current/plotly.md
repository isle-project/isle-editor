---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) vizualizácia.

## Možnosti

* __data__ | `array (required)`: dátové pole. Default: `none`.
* __draggable__ | `boolean`: kontroluje, či má byť plocha preťahovateľná.. Default: `false`.
* __editable__ | `boolean`: kontroluje, či sú štítky vytvoreného grafu editovateľné. Default: `false`.
* __id__ | `string`: identifikátor komponentu. Default: `none`.
* __layout__ | `object`: Objekt rozloženia Plotly. Default: `{}`.
* __config__ | `object`: Možnosti konfigurácie Plotly (pozri: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: ovláda, či sa majú zobrazovať tlačidlá na zmenu legendy. Default: `true`.
* __meta__ | `object`: metainformácie o pozemku. Default: `none`.
* __revision__ | `number`: ak je zadaný, spôsobí, že sa graf aktualizuje, keď sa zvýši hodnota revízie. Default: `none`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onAfterPlot__ | `function`: spätné volanie vyvolané pri každom vykreslení grafu. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: funkcia spätného volania vyvolaná po kliknutí na ľubovoľný prvok. Default: `onClick() {}`.
* __onInitialized__ | `function`: spätné volanie vyvolané po inicializácii grafu; volá sa s obrázkom (objekt s tromi kľúčmi zodpovedajúcimi vstupným rekvizitám: `data`, `layout` a `frames`) a DOM uzlom `graphDiv`. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: funkcia spätného volania vyvolaná po kliknutí na položku legendy. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: funkcia spätného volania vyvolaná pri dvojitom kliknutí na prvok legendy. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: spätná funkcia vyvolaná pri spustení funkcie relayout. Default: `onRelayout() {}`.
* __onSelected__ | `function`: spätná funkcia vyvolaná pri výbere prvkov. Default: `onSelected() {}`.
* __onShare__ | `function`: spätná funkcia vyvolaná po kliknutí na tlačidlo "Zdieľať". Default: `none`.
* __removeButtons__ | `boolean`: ovláda, či sa majú odstrániť všetky tlačidlá (okrem tlačidla na celú obrazovku, ak je povolené).. Default: `false`.
* __toggleFullscreen__ | `boolean`: ovláda, či sa má plocha zobraziť v celoobrazovkovom režime.. Default: `true`.


## Príklady

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

