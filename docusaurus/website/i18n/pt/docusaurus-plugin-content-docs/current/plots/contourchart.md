---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Um gráfico de contorno.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor para cada variável. Default: `none`.
* __x__ | `string (required)`: variável do eixo x. Default: `none`.
* __y__ | `string (required)`: variável y-eixo. Default: `none`.
* __overlayPoints__ | `boolean`: controla se devem ser sobrepostos pontos para cada observação. Default: `false`.
* __smoothSpan__ | `number`: vão de suavização. Default: `0.66`.
* __regressionMethod__ | `array<string>`: matriz contendo `linear` e/ou `smooth` para sobrepor uma linha de regressão linear e/ou suavizada. Default: `none`.
* __onSelected__ | `function`: chamada de retorno invocada quando os pontos são selecionados com valores x, y e os pontos selecionados. Default: `onSelected() {}`.


## Exemplos

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

