---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) vizualizace.

## Možnosti

* __data__ | `array (required)`: datové pole. Default: `none`.
* __draggable__ | `boolean`: určuje, zda má být graf přetažitelný. Default: `false`.
* __editable__ | `boolean`: řídí, zda jsou popisky vytvořeného grafu editovatelné.. Default: `false`.
* __id__ | `string`: identifikátor součásti. Default: `none`.
* __layout__ | `object`: Objekt rozložení Plotly. Default: `{}`.
* __config__ | `object`: Možnosti konfigurace Plotly (viz: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: určuje, zda se mají zobrazovat tlačítka pro změnu legendy.. Default: `true`.
* __meta__ | `object`: metainformace o pozemku. Default: `none`.
* __revision__ | `number`: pokud je zadán, způsobí aktualizaci grafu při zvýšení hodnoty revize.. Default: `none`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onAfterPlot__ | `function`: funkce zpětného volání vyvolaná při každém vykreslení grafu. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: funkce zpětného volání vyvolaná při kliknutí na libovolný prvek.. Default: `onClick() {}`.
* __onInitialized__ | `function`: zpětné volání vyvolané po inicializaci grafu; volá se pomocí figure (objekt se třemi klíči odpovídajícími vstupním rekvizitám: `data`, `layout` a `frames`) a DOM uzlu `graphDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: funkce zpětného volání vyvolaná při kliknutí na prvek legendy. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: funkce zpětného volání vyvolaná při dvojitém kliknutí na prvek legendy. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: funkce zpětného volání vyvolaná při spuštění relayout. Default: `onRelayout() {}`.
* __onSelected__ | `function`: funkce zpětného volání vyvolaná při výběru prvků. Default: `onSelected() {}`.
* __onShare__ | `function`: funkce zpětného volání vyvolaná po kliknutí na tlačítko "Sdílet".. Default: `none`.
* __removeButtons__ | `boolean`: určuje, zda se mají odstranit všechna tlačítka (kromě tlačítka pro celou obrazovku, pokud je povoleno).. Default: `false`.
* __toggleFullscreen__ | `boolean`: určuje, zda má být povoleno zobrazení grafu v celoobrazovkovém režimu.. Default: `true`.


## Příklady

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

