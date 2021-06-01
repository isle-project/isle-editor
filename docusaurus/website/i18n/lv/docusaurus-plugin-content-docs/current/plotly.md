---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) vizualizācija.

## Iespējas

* __data__ | `array (required)`: datu masīvs. Default: `none`.
* __draggable__ | `boolean`: kontrolē, vai zemes gabalu var vilkt. Default: `false`.
* __editable__ | `boolean`: kontrolē, vai izveidotā laukuma etiķetes ir rediģējamas.. Default: `false`.
* __id__ | `string`: komponenta identifikators. Default: `none`.
* __layout__ | `object`: Plotly izkārtojuma objekts. Default: `{}`.
* __config__ | `object`: Plotly konfigurācijas opcijas (skatiet: https://plotly.com/javascript/configuration-options/).. Default: `{}`.
* __legendButtons__ | `boolean`: kontrolē, vai tiek rādītas pogas leģendas maiņai.. Default: `true`.
* __meta__ | `object`: zemes gabala metainformācija. Default: `none`.
* __revision__ | `number`: ja ir norādīts, izraisa zemes gabala atjaunināšanu, kad tiek palielināta pārskatīšanas vērtība.. Default: `none`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onAfterPlot__ | `function`: atgriezeniskā zvana funkcija, kas tiek izsaukta ikreiz, kad tiek uzzīmēts grafiks.. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: atsauces funkcija, kas tiek izsaukta, kad ir noklikšķināts uz jebkura elementa.. Default: `onClick() {}`.
* __onInitialized__ | `function`: atsauces zvans, kas tiek izsaukts, tiklīdz ir inicializēts attēls; izsaukts ar figūru (objekts ar trīs atslēgām, kas atbilst ievades rekvizītiem: `data`, `layout` un `frames`) un DOM mezglu `graphDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: atsauces funkcija, kas tiek izsaukta, kad ir noklikšķināts uz leģendas elementa.. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: atsauces funkcija, kas tiek izsaukta, kad uz leģendas elementa ir divreiz uzklikšķināts.. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: atgriezeniskā zvana funkcija, kas tiek izsaukta, kad ir aktivizēts relayout.. Default: `onRelayout() {}`.
* __onSelected__ | `function`: atgriezeniskā zvana funkcija, kas tiek izsaukta, kad ir atlasīti elementi.. Default: `onSelected() {}`.
* __onShare__ | `function`: atsauces funkcija, kas tiek izsaukta, noklikšķinot uz pogas "Kopīgot".. Default: `none`.
* __removeButtons__ | `boolean`: kontrolē, vai noņemt visas pogas (izņemot pilnekrāna pogu, ja tā ir iespējota).. Default: `false`.
* __toggleFullscreen__ | `boolean`: kontrolē, vai ļaut attēlot grafiku pilnekrāna režīmā.. Default: `true`.


## Piemēri

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

