---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

Plotkliwa wizualizacja.

## Opcje

* __data__ | `array (required)`: siatka danych. Default: `none`.
* __draggable__ | `boolean`: kontroluje, czy działka powinna być wleczona. Default: `false`.
* __editable__ | `boolean`: kontroluje, czy etykiety utworzonej działki nadają się do edycji. Default: `false`.
* __id__ | `string`: identyfikator elementu. Default: `none`.
* __layout__ | `object`: Obiekt w układzie planowym. Default: `{}`.
* __config__ | `object`: Opcje konfiguracyjne Plotly (patrz: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski do zmiany legendy. Default: `true`.
* __meta__ | `object`: fabuła meta-informacja. Default: `none`.
* __revision__ | `number`: po dostarczeniu, powoduje, że wykres jest aktualizowany, gdy wartość korekty jest zwiększana. Default: `none`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onAfterPlot__ | `function`: funkcja callback wywoływana przy każdym wykresie. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: funkcja callback wywoływana po kliknięciu dowolnego elementu. Default: `onClick() {}`.
* __onInitialized__ | `function`: callback wywoływany po zainicjowaniu wykresu; wywoływany za pomocą figury (obiekt z trzema klawiszami odpowiadającymi rekwizytom wejściowym: `data`, `layout` i `ramki`) oraz węzła DOM `graphDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: funkcja callback wywoływana po kliknięciu pozycji legendy. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: funkcja callback wywoływana po dwukrotnym kliknięciu elementu legendy. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: funkcja wywołań zwrotnych wywoływanych w przypadku zadziałania przekaźnika. Default: `onRelayout() {}`.
* __onSelected__ | `function`: funkcja wywołania zwrotnego po wybraniu elementów. Default: `onSelected() {}`.
* __onShare__ | `function`: funkcja wywołania zwrotnego po kliknięciu na przycisk "Udostępnij".. Default: `none`.
* __removeButtons__ | `boolean`: kontroluje, czy usunąć wszystkie przyciski (oprócz przycisku pełnoekranowego, jeśli jest włączony). Default: `false`.
* __toggleFullscreen__ | `boolean`: kontroluje, czy pozwolić na wyświetlanie wykresu w trybie pełnoekranowym. Default: `true`.


## Przykłady

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

