---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Ein Venn-Diagramm, das die Ko-Okzidenz von Wörtern in Dokumenten einer gelieferten Term-Dokument-Matrix visualisiert.

## Options

* __height__ | `number`: Höhe des Venn-Diagramms in Pixel. Default: `350`.
* __nTexts__ | `number (required)`: Anzahl der Quellen, aus denen der Text gesammelt wurde. Default: `none`.
* __onClick__ | `function`: Callback für das, was getan werden soll, wenn "Venn-Diagramm zeichnen" angeklickt wird. Default: `onClick() {}`.
* __tdm__ | `array (required)`: Array", das eine [Term-Dokument-Matrix] (https://en.wikipedia.org/wiki/Document-term_matrix) darstellen soll. Default: `none`.
* __vocabulary__ | `array (required)`: `array` in der Reihenfolge des übergebenen `tdm`-Arrays, so dass die Indizes ihren Wörtern zugeordnet werden können. Default: `none`.
* __width__ | `number`: Breite des Venn-Diagramms in Pixel. Default: `600`.


## Examples

```jsx live
<LearnWordVennDiagram />
```

