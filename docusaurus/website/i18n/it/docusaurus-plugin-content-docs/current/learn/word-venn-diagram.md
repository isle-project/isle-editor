---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Un diagramma di Venn che visualizza la co-occorrenza delle parole nei documenti di una matrice di termini-documento fornita.

## Opzioni

* __height__ | `number`: altezza del diagramma di Venn in pixel. Default: `350`.
* __nTexts__ | `number (required)`: numero di fonti da cui è stato raccolto il testo. Default: `none`.
* __onClick__ | `function`: Richiamo per sapere cosa fare quando si clicca su "Disegna diagramma di Venn".. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `array` cioè rappresentare un [termine matrice di documenti](https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `array` nell'ordine dell'array `tdm` passato in modo che gli indici possano corrispondere alle loro parole. Default: `none`.
* __width__ | `number`: larghezza del diagramma di Venn in pixel. Default: `600`.


## Esempi

```jsx live
<LearnWordVennDiagram />
```

