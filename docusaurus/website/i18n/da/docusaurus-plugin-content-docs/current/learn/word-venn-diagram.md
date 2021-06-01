---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Et venn-diagram, der visualiserer ords sameksistens i dokumenter i en leveret term-dokument-matrix.

## Indstillinger

* __height__ | `number`: Venn-diagrammets højde i pixels. Default: `350`.
* __nTexts__ | `number (required)`: antallet af kilder, hvorfra teksten er indsamlet. Default: `none`.
* __onClick__ | `function`: callback for hvad der skal ske, når der klikkes på "Draw Venn Diagram". Default: `onClick() {}`.
* __tdm__ | `array (required)`: `array`, der skal repræsentere en [term dokument matrix] (https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `array` i den rækkefølge, som `tdm` arrayet er overdraget, så indeksene kan matches til deres ord. Default: `none`.
* __width__ | `number`: Venn-diagrammets bredde i pixels. Default: `600`.


## Eksempler

```jsx live
<LearnWordVennDiagram />
```

