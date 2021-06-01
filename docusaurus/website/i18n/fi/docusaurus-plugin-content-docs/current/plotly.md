---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) visualisointi.

## Vaihtoehdot

* __data__ | `array (required)`: tietomuoto. Default: `none`.
* __draggable__ | `boolean`: ohjaa, onko kartta vedettävissä. Default: `false`.
* __editable__ | `boolean`: ohjaa, ovatko luodun piirroksen tarrat muokattavissa.. Default: `false`.
* __id__ | `string`: komponentin tunniste. Default: `none`.
* __layout__ | `object`: Plotly layout-objekti. Default: `{}`.
* __config__ | `object`: Plotlyn konfigurointivaihtoehdot (katso: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: ohjaa, näytetäänkö painikkeet legendan muuttamista varten. Default: `true`.
* __meta__ | `object`: juoni metatiedot. Default: `none`.
* __revision__ | `number`: kun se annetaan, saa piirroksen päivittymään, kun tarkistuksen arvoa kasvatetaan.. Default: `none`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onAfterPlot__ | `function`: callback-funktio, jota kutsutaan joka kerta, kun kaavio piirretään.. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: callback-funktio, joka käynnistyy, kun jotain elementtiä napsautetaan.. Default: `onClick() {}`.
* __onInitialized__ | `function`: callback, jota kutsutaan, kun plot on alustettu; kutsutaan figure (objekti, jossa on kolme avainta, jotka vastaavat input-propsia: `data`, `layout` ja `frames`) ja DOM-solmu `graphDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: callback-funktio, joka käynnistetään, kun legendan kohdetta napsautetaan. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: callback-funktio, joka käynnistetään, kun legendan kohdetta kaksoisnapsautetaan.. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: takaisinkutsufunktio, joka käynnistyy, kun relayout käynnistyy.. Default: `onRelayout() {}`.
* __onSelected__ | `function`: callback-funktio, jota kutsutaan, kun elementit valitaan. Default: `onSelected() {}`.
* __onShare__ | `function`: Callback-funktio, joka käynnistetään napsautettaessa "Jaa"-painiketta.. Default: `none`.
* __removeButtons__ | `boolean`: ohjaa, poistetaanko kaikki painikkeet (lukuun ottamatta koko näytön painiketta, jos se on käytössä).. Default: `false`.
* __toggleFullscreen__ | `boolean`: valvoo, sallitaanko juonen näyttäminen koko näytön tilassa.. Default: `true`.


## Esimerkkejä

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

