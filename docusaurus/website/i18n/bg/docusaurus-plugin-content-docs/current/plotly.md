---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

[Plotly](https://plotly.com/javascript/) визуализация.

## Опции

* __data__ | `array (required)`: масив от данни. Default: `none`.
* __draggable__ | `boolean`: контролира дали плотът да може да се плъзга. Default: `false`.
* __editable__ | `boolean`: контролира дали етикетите на създадения чертеж могат да се редактират. Default: `false`.
* __id__ | `string`: идентификатор на компонент. Default: `none`.
* __layout__ | `object`: Обект за оформление на Plotly. Default: `{}`.
* __config__ | `object`: Опции за конфигуриране на Plotly (вж.: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: контролира дали да се показват бутони за промяна на легендата. Default: `true`.
* __meta__ | `object`: метаинформация за сюжета. Default: `none`.
* __revision__ | `number`: когато е предоставено, кара графиката да се актуализира, когато стойността на ревизията се увеличи.. Default: `none`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onAfterPlot__ | `function`: функция за обратна връзка, която се извиква всеки път, когато се изчертава графика. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: функция за обратна връзка, задействана при щракване върху някой елемент. Default: `onClick() {}`.
* __onInitialized__ | `function`: обратно извикване, след като плотът е инициализиран; извиква се с фигурата (обект с три ключа, съответстващи на входните реквизити: `data`, `layout` и `frames`) и DOM възела `graphDiv`. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: функция за обратна връзка, задействана при щракване върху елемент от легендата. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: функция за обратна връзка, извикана при двойно щракване върху елемент от легендата. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: функция за обратна връзка, задействана при задействане на relayout. Default: `onRelayout() {}`.
* __onSelected__ | `function`: функция за обратна връзка, задействана при избиране на елементи. Default: `onSelected() {}`.
* __onShare__ | `function`: функция за обратно извикване, задействана при щракване върху бутона "Споделяне". Default: `none`.
* __removeButtons__ | `boolean`: контролира дали да се премахнат всички бутони (освен бутона за цял екран, ако е разрешен). Default: `false`.
* __toggleFullscreen__ | `boolean`: контролира дали да се позволи показването на графиката в режим на цял екран. Default: `true`.


## Примери

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

