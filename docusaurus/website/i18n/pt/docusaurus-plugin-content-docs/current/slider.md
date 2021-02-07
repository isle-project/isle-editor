---
id: slider 
title: Slider
sidebar_label: Slider
---

Um componente que exibe seus filhos em um slideshow ou carrossel.

## Options

* __title__ | `string`: título do slideshow / carrossel a ser exibido em sua parte superior. Default: `''`.
* __dots__ | `boolean`: pontos de exibição no fundo para navegar rapidamente para qualquer slide. Default: `true`.
* __fade__ | `boolean`: controla se o desbotamento é usado para a transição entre as lâminas. Default: `false`.
* __draggable__ | `boolean`: controla se os usuários podem arrastar os slides para navegar entre eles. Default: `false`.
* __pagination__ | `string`: se mostrar a paginação ou na "parte superior", "parte inferior", ou "ambos".. Default: `'bottom'`.
* __goto__ | `number`: Se a propriedade for alterada, o componente salta para a corrediça com o índice selecionado. Default: `0`.
* __infinite__ | `boolean`: controla se o slideshow envolve o seu conteúdo. Default: `false`.
* __interval__ | `number`: estabelece um intervalo de tempo para uma troca automática de lâminas. Default: `none`.
* __swipe__ | `boolean`: permite o comportamento de arrasto/swipe. Default: `false`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onClick__ | `function`: chamada de retorno invocada ao clicar nos botões seguinte/anterior. Default: `onClick() {}`.


## Examples

```jsx live
<Slider title="Questions to explore:" >
    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>
    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>
    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>
    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>
</Slider>
```

