---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Um histograma.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `string (required)`: variável a exibir. Default: `none`.
* __group__ | `(string|Factor)`: variável de agrupamento. Default: `none`.
* __groupMode__ | `string`: se devem sobrepor histogramas agrupados uns sobre os outros (`Overlay') ou em parcelas separadas umas ao lado das outras (`Facetas'). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: controla se deve exibir valores de densidade em vez de contar com o eixo y. Default: `false`.
* __densityType__ | `string`: ao exibir as densidades, pode-se sobrepor uma distribuição paramétrica (`Normal', `Uniforme' ou `Exponencial') ou uma estimativa não paramétrica da densidade do grão (`Acionada por dados'). Default: `none`.
* __bandwidthAdjust__ | `number`: undefined. Default: `1`.
* __binStrategy__ | `string`: estratégia de fiação (`Automático`, `Selecionar # de caixas`, ou `Configurar largura da caixa`). Default: `'Automatic'`.
* __nBins__ | `number`: número personalizado de silos. Default: `none`.
* __nCols__ | `number`: número de colunas ao exibir um histograma agrupado facetado. Default: `none`.
* __xBins__ | `{start,size,end}`: objeto com propriedades de "início", "tamanho" e "fim" que governam o comportamento de encinchamento. Default: `{}`.


## Exemplos

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```

