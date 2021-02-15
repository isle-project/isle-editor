---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Um mapa de calor para visualizar uma relação entre duas variáveis.

## Options

* __data__ | `object (required)`: objeto de arrays de valor para cada variável. Default: `none`.
* __x__ | `string (required)`: variável do eixo x. Default: `none`.
* __y__ | `string (required)`: variável y-eixo. Default: `none`.
* __overlayPoints__ | `boolean`: controla se devem ser sobrepostos pontos para cada observação. Default: `false`.
* __smoothSpan__ | `number`: vão de suavização. Default: `0.66`.
* __regressionMethod__ | `array<string>`: matriz contendo `linear` e/ou `smooth` para sobrepor uma linha de regressão linear e/ou suavizada. Default: `none`.
* __alternateColor__ | `boolean`: controla se deve ser utilizado um esquema de cores alternativo para o mapa térmico. Default: `false`.
* __commonXAxis__ | `boolean`: controla se deve ser usado um eixo x comum ao criar múltiplos mapas de calor por valor de uma variável de agrupamento. Default: `false`.
* __commonYAxis__ | `boolean`: controla se deve ser usado um eixo y comum ao criar múltiplos mapas de calor por valor de uma variável de agrupamento. Default: `false`.


## Examples

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

