---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) vizualizacija.

## Parinktys

* __data__ | `array (required)`: duomenų masyvas. Default: `none`.
* __draggable__ | `boolean`: kontroliuoja, ar sklypą galima vilkti.. Default: `false`.
* __editable__ | `boolean`: kontroliuoja, ar sukurto sklypo etiketes galima redaguoti.. Default: `false`.
* __id__ | `string`: sudedamosios dalies identifikatorius. Default: `none`.
* __layout__ | `object`: Plotly išdėstymo objektas. Default: `{}`.
* __config__ | `object`: Plotly konfigūracijos parinktys (žr.: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: kontroliuoja, ar rodyti legendos keitimo mygtukus.. Default: `true`.
* __meta__ | `object`: sklypo metainformacija. Default: `none`.
* __revision__ | `number`: kai nurodyta, sklypas atnaujinamas, kai padidinama peržiūros vertė.. Default: `none`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onAfterPlot__ | `function`: grįžtamojo ryšio funkcija, iškviečiama kiekvieną kartą, kai braižoma diagrama.. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: grįžtamojo ryšio funkcija, iškviečiama paspaudus bet kurį elementą.. Default: `onClick() {}`.
* __onInitialized__ | `function`: iškviečiamas atgalinis skambutis, inicijuojamas inicializavus sklypą; iškviečiamas su figūra (objektas su trimis raktais, atitinkančiais įvesties rekvizitus: `data`, `layout` ir `frames`) ir DOM mazgu `graphDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: grįžtamojo ryšio funkcija, iškviečiama, kai paspaudžiamas legendos elementas. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: grįžtamojo ryšio funkcija, iškviečiama, kai legendos elementas spustelėjamas du kartus.. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: grįžtamojo ryšio funkcija, iškviečiama, kai suveikia relayout.. Default: `onRelayout() {}`.
* __onSelected__ | `function`: grįžtamojo ryšio funkcija, iškviečiama pasirinkus elementus.. Default: `onSelected() {}`.
* __onShare__ | `function`: grįžtamojo ryšio funkcija, iškviečiama paspaudus mygtuką "Bendrinti".. Default: `none`.
* __removeButtons__ | `boolean`: kontroliuoja, ar pašalinti visus mygtukus (išskyrus pilno ekrano mygtuką, jei įjungtas).. Default: `false`.
* __toggleFullscreen__ | `boolean`: kontroliuoja, ar leisti rodyti sklypą viso ekrano režimu.. Default: `true`.


## Pavyzdžiai

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

