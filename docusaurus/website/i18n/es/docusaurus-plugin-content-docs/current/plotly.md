---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

Visualización gráfica.

## Opciones

* __data__ | `array (required)`: matriz de datos. Default: `none`.
* __draggable__ | `boolean`: controla si la trama debe ser arrastrable. Default: `false`.
* __editable__ | `boolean`: controla si las etiquetas de la trama creada son editables. Default: `false`.
* __id__ | `string`: identificador de componentes. Default: `none`.
* __layout__ | `object`: Objeto de trazado. Default: `{}`.
* __config__ | `object`: Opciones de configuración de Plotly (véase: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: controla si se muestran los botones para cambiar la leyenda. Default: `true`.
* __meta__ | `object`: meta-información de la trama. Default: `none`.
* __revision__ | `number`: cuando se proporciona, hace que el gráfico se actualice cuando el valor de revisión se incrementa. Default: `none`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onAfterPlot__ | `function`: función de llamada de retorno invocada cada vez que se traza un gráfico. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: La función de devolución de llamada que se invoca cuando se hace clic en cualquier elemento. Default: `onClick() {}`.
* __onInitialized__ | `function`: llamada de retorno una vez que se inicializa la trama; llamada con figura (objeto con tres claves que corresponden a los puntales de entrada: "datos", "disposición" y "tramas") y el nodo DOM "graphDiv".. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: función de devolución de llamada invocada cuando se hace clic en el elemento de la leyenda. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: La función de devolución de llamada se invoca cuando se hace doble clic en el elemento de la leyenda. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: función de devolución de llamada invocada cuando se activa la retransmisión. Default: `onRelayout() {}`.
* __onSelected__ | `function`: función de llamada de retorno invocada cuando se seleccionan los elementos. Default: `onSelected() {}`.
* __onShare__ | `function`: función de devolución de llamada invocada al hacer clic en el botón "Compartir".. Default: `none`.
* __removeButtons__ | `boolean`: controla si se eliminan todos los botones (aparte del botón de pantalla completa si está activado). Default: `false`.
* __toggleFullscreen__ | `boolean`: controla si se permite mostrar la trama en modo de pantalla completa. Default: `true`.


## Ejemplos

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

