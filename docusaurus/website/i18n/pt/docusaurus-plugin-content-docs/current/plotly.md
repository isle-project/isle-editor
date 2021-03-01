---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

Visualização parcelada.

## Opções

* __data__ | `array (required)`: matriz de dados. Default: `none`.
* __draggable__ | `boolean`: controla se a trama deve ser arrastada. Default: `false`.
* __editable__ | `boolean`: controla se as etiquetas da trama criada são editáveis. Default: `false`.
* __id__ | `string`: identificador do componente. Default: `none`.
* __layout__ | `object`: Objeto de layout Plotly. Default: `{}`.
* __config__ | `object`: Opções de configuração em lote (ver: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: controla se devem ser exibidos botões para mudar a legenda. Default: `true`.
* __meta__ | `object`: meta-informação da trama. Default: `none`.
* __revision__ | `number`: quando fornecido, faz com que a trama seja atualizada quando o valor de revisão é incrementado. Default: `none`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onAfterPlot__ | `function`: função de chamada de retorno invocada cada vez que um gráfico é traçado. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: função de chamada de retorno invocada quando qualquer elemento é clicado. Default: `onClick() {}`.
* __onInitialized__ | `function`: chamada de retorno invocada uma vez iniciada a trama; chamada com figura (objeto com três chaves correspondentes aos adereços de entrada: `dados`, `layout` e `frames`) e o nó DOM `graphDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: função de chamada de retorno invocada quando o item da legenda é clicado. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: função de chamada de retorno invocada quando o item da legenda é clicado duas vezes. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: função de chamada de retorno invocada quando o relé é acionado. Default: `onRelayout() {}`.
* __onSelected__ | `function`: função de chamada de retorno invocada quando os elementos são selecionados. Default: `onSelected() {}`.
* __onShare__ | `function`: função chamada de retorno invocada ao clicar no botão "Compartilhar".. Default: `none`.
* __removeButtons__ | `boolean`: controla se todos os botões devem ser removidos (além do botão de tela cheia, se habilitado). Default: `false`.
* __toggleFullscreen__ | `boolean`: controla se permite a exibição da trama em modo de tela cheia. Default: `true`.


## Exemplos

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

