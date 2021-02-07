---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Um diagrama venn que visualiza a co-ocorrência de palavras em documentos de uma matriz de termo-documentos fornecida.

## Options

* __height__ | `number`: altura do diagrama Venn em pixels. Default: `350`.
* __nTexts__ | `number (required)`: número de fontes a partir das quais o texto foi coletado. Default: `none`.
* __onClick__ | `function`: chamada de retorno para o que deve ser feito quando se clica no "Diagrama Draw Venn".. Default: `onClick() {}`.
* __tdm__ | `array (required)`: "array" que é representar uma [termo matriz de documentos] (https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: "array" na ordem do "tdm" passou para que os índices possam ser compatíveis com suas palavras. Default: `none`.
* __width__ | `number`: largura do diagrama Venn em pixels. Default: `600`.


## Examples

```jsx live
<LearnWordVennDiagram />
```

