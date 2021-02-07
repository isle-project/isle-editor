---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Un diagrama de Venn que visualiza la co-ocurrencia de palabras en los documentos de una matriz de términos-documentos suministrada.

## Options

* __height__ | `number`: la altura del diagrama de Venn en píxeles. Default: `350`.
* __nTexts__ | `number (required)`: número de fuentes de las que se ha reunido el texto. Default: `none`.
* __onClick__ | `function`: Llamada de vuelta para lo que se debe hacer cuando se hace clic en "Dibujar el diagrama de Venn".. Default: `onClick() {}`.
* __tdm__ | `array (required)`: "Matriz" que va a representar una [matriz de documentos de término](https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: "Matriz" en el orden de la matriz de Tdm pasada para que los índices puedan coincidir con sus palabras.. Default: `none`.
* __width__ | `number`: ancho del diagrama de Venn en píxeles. Default: `600`.


## Examples

```jsx live
<LearnWordVennDiagram />
```

