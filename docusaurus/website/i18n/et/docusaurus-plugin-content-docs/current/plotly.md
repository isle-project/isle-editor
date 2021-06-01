---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) visualiseerimine.

## Valikud

* __data__ | `array (required)`: andmemassiiv. Default: `none`.
* __draggable__ | `boolean`: kontrollib, kas joonis peaks olema lohistatav. Default: `false`.
* __editable__ | `boolean`: kontrollib, kas loodud graafiku sildid on redigeeritavad. Default: `false`.
* __id__ | `string`: komponendi identifikaator. Default: `none`.
* __layout__ | `object`: Plotly paigutusobjekt. Default: `{}`.
* __config__ | `object`: Plotly konfiguratsioonivõimalused (vt: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: kontrollib, kas kuvatakse nuppe legendi muutmiseks. Default: `true`.
* __meta__ | `object`: krundi metainfo. Default: `none`.
* __revision__ | `number`: kui see on antud, põhjustab graafiku uuendamise, kui revisjoni väärtust suurendatakse.. Default: `none`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onAfterPlot__ | `function`: callback funktsioon, mida kutsutakse esile iga kord, kui graafik joonistatakse.. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: callback-funktsioon, mis käivitub, kui mõnele elemendile vajutatakse. Default: `onClick() {}`.
* __onInitialized__ | `function`: callback, mida kutsutakse üles pärast plot'i initsialiseerimist; kutsutakse koos joonisega (objekt, millel on kolm võtit, mis vastavad sisendpropsidele: `data`, `layout` ja `frames`) ja DOM-sõlmega `graphDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: callback-funktsioon, mis kutsutakse esile, kui legendi elemendile vajutatakse. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: callback-funktsioon, mis kutsutakse esile, kui legendi elemendile tehakse topeltklõps. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: tagasilöögifunktsioon, mida kutsutakse esile, kui releeout käivitub. Default: `onRelayout() {}`.
* __onSelected__ | `function`: callback-funktsioon, mida kutsutakse esile, kui elemendid on valitud. Default: `onSelected() {}`.
* __onShare__ | `function`: Callback-funktsioon, mis kutsutakse esile, kui vajutatakse nupule "Share" (Jaga).. Default: `none`.
* __removeButtons__ | `boolean`: kontrollib, kas eemaldada kõik nupud (peale täisekraani nupu, kui see on lubatud). Default: `false`.
* __toggleFullscreen__ | `boolean`: kontrollib, kas lubada graafiku kuvamist täisekraanil.. Default: `true`.


## Näited

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

