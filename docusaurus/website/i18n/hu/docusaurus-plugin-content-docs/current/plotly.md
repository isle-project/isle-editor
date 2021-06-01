---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) vizualizáció.

## Opciók

* __data__ | `array (required)`: adattömb. Default: `none`.
* __draggable__ | `boolean`: szabályozza, hogy a plot húzható legyen-e. Default: `false`.
* __editable__ | `boolean`: szabályozza, hogy a létrehozott plot címkéi szerkeszthetők legyenek-e. Default: `false`.
* __id__ | `string`: komponens azonosító. Default: `none`.
* __layout__ | `object`: Plotly layout objektum. Default: `{}`.
* __config__ | `object`: Plotly konfigurációs lehetőségek (lásd: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: szabályozza, hogy megjelenjenek-e gombok a legenda megváltoztatására. Default: `true`.
* __meta__ | `object`: metainformációk. Default: `none`.
* __revision__ | `number`: ha megadva van, akkor a diagram frissül, amikor a revízió értéke növekszik.. Default: `none`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onAfterPlot__ | `function`: callback függvény, amely minden egyes alkalommal meghívódik, amikor egy diagramot ábrázolnak.. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: callback függvény, amely bármely elemre kattintáskor meghívódik. Default: `onClick() {}`.
* __onInitialized__ | `function`: callback, amely a plot inicializálása után hívódik; a figure (objektum három kulccsal, amelyek a bemeneti kellékeknek felelnek meg: `data`, `layout` és `frames`) és a DOM csomópont `graphDiv` segítségével hívható meg.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: callback függvény, amelyet a legenda elemre való kattintáskor hívnak meg. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: callback függvény, amelyet a legenda elemre való dupla kattintáskor hívnak meg. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: callback függvény, amelyet a relayout kiváltásakor hívnak meg. Default: `onRelayout() {}`.
* __onSelected__ | `function`: callback függvény, amelyet az elemek kiválasztásakor hívnak elő. Default: `onSelected() {}`.
* __onShare__ | `function`: callback függvény, amely a "Megosztás" gombra kattintáskor hívódik elő.. Default: `none`.
* __removeButtons__ | `boolean`: vezérli, hogy az összes gombot eltávolítsa-e (a teljes képernyő gombon kívül, ha engedélyezve van). Default: `false`.
* __toggleFullscreen__ | `boolean`: szabályozza, hogy engedélyezi-e a plot teljes képernyős megjelenítését. Default: `true`.


## Példák

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

