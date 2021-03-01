---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

Сплошная визуализация.

## Варианты

* __data__ | `array (required)`: массив данных. Default: `none`.
* __draggable__ | `boolean`: контролирует, следует ли перетаскивать участок. Default: `false`.
* __editable__ | `boolean`: управляет тем, редактируются ли метки созданного графика. Default: `false`.
* __id__ | `string`: идентификатор компонента. Default: `none`.
* __layout__ | `object`: Объект планировки Plotly layout. Default: `{}`.
* __config__ | `object`: Опции конфигурации на месте (см.: https://plotly.com/javascript/configuration-options/).. Default: `{}`.
* __legendButtons__ | `boolean`: управляет отображением кнопок для смены легенды. Default: `true`.
* __meta__ | `object`: сюжетная мета-информация. Default: `none`.
* __revision__ | `number`: когда это предусмотрено, вызывает обновление графика при увеличении значения ревизии.. Default: `none`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onAfterPlot__ | `function`: функция обратного вызова вызывается каждый раз при построении графика. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: функция обратного вызова, вызываемая при щелчке по любому элементу. Default: `onClick() {}`.
* __onInitialized__ | `function`: вызов обратного вызова после инициализации графика; вызывается с помощью figure (объект с тремя ключами, соответствующими вводимому реквизиту: `данные`, `раскладка` и `кадры`) и DOM-узла `графDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: функция обратного вызова при нажатии на элемент легенды. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: функция обратного вызова, вызываемая при двойном щелчке на элементе легенды. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: функция обратного вызова при срабатывании ретрансляции. Default: `onRelayout() {}`.
* __onSelected__ | `function`: функция обратного вызова, вызываемая при выборе элементов. Default: `onSelected() {}`.
* __onShare__ | `function`: функция обратного вызова, вызываемая при нажатии кнопки "Поделиться".. Default: `none`.
* __removeButtons__ | `boolean`: управляет удалением всех кнопок (кроме полноэкранной, если она включена).. Default: `false`.
* __toggleFullscreen__ | `boolean`: управляет тем, позволять ли отображать график в полноэкранном режиме. Default: `true`.


## Примеры

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

