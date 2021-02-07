---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Um componente de fundo dinâmico que percorre uma lista de textos em um intervalo especificado.

## Options

* __list__ | `array<string>`: lista de textos a serem exibidos. Default: `[]`.
* __loop__ | `boolean`: indica se o processo deve ser exibido infinitamente. Default: `false`.
* __direction__ | `string`: a direção do fluxo do texto (ou "esquerda", "direita", "para cima", "para baixo", "para baixo", "focagem", ou "redemoinho"). Default: `'right'`.
* __still__ | `number`: o tempo que o texto permanece parado (em segundos). Default: `3`.
* __interval__ | `number`: o intervalo entre as chamadas (em segundos). Default: `15`.
* __inTime__ | `number`: tempo do efeito de entrada (em segundos). Default: `0.6`.
* __outTime__ | `number`: tempo do efeito de saída (em segundos). Default: `1`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos de CSS do texto. Default: `{}`.


## Examples

```jsx live
<ScrollingText
    list={[ 'Heading' ]}
    style={{ fontSize: 44, color: 'red' }}
    interval={5}
    inTime={1.2}
    outTime={1.2}
    still={2}
/>
```



