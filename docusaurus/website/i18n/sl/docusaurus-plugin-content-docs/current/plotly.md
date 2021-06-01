---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) vizualizacija.

## Možnosti

* __data__ | `array (required)`: podatkovno polje. Default: `none`.
* __draggable__ | `boolean`: nadzoruje, ali naj bo graf mogoče povleči.. Default: `false`.
* __editable__ | `boolean`: nadzoruje, ali so oznake ustvarjene ploskve urejive.. Default: `false`.
* __id__ | `string`: identifikator komponente. Default: `none`.
* __layout__ | `object`: Objekt postavitve Plotly. Default: `{}`.
* __config__ | `object`: Možnosti konfiguracije programa Plotly (glejte: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: nadzoruje, ali se prikažejo gumbi za spreminjanje legende.. Default: `true`.
* __meta__ | `object`: metainformacije o ploskvi. Default: `none`.
* __revision__ | `number`: če je naveden, povzroči posodobitev ploskve, ko se poveča vrednost revizije.. Default: `none`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onAfterPlot__ | `function`: povratna funkcija, ki se sproži vsakič, ko se izriše graf. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: povratna funkcija, ki se sproži ob kliku na kateri koli element.. Default: `onClick() {}`.
* __onInitialized__ | `function`: povratni klic, ki se sproži, ko je parcela inicializirana; klican s figuro (objekt s tremi ključi, ki ustrezajo vhodnim rekvizitom: `data`, `layout` in `frames`) in vozliščem DOM `graphDiv`. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: funkcija povratnega klica, ki se sproži ob kliku na element legende. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: funkcija povratne zveze, ki se sproži ob dvojnem kliku na element legende. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: funkcija povratnega klica, ki se sproži, ko se sproži relayout.. Default: `onRelayout() {}`.
* __onSelected__ | `function`: funkcija povratnega klica, ki se sproži, ko so elementi izbrani.. Default: `onSelected() {}`.
* __onShare__ | `function`: povratna funkcija, ki se sproži ob kliku na gumb "Share".. Default: `none`.
* __removeButtons__ | `boolean`: nadzoruje, ali se odstranijo vsi gumbi (razen gumba za celozaslonsko prikazovanje, če je omogočen).. Default: `false`.
* __toggleFullscreen__ | `boolean`: nadzoruje, ali se dovoli prikazovanje ploskve v celozaslonskem načinu.. Default: `true`.


## Primeri

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

