---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Ett venndiagram som visualiserar samvariation av ord i dokument i en matris för termer och dokument.

## Alternativ

* __height__ | `number`: Venn-diagrammets höjd i pixlar. Default: `350`.
* __nTexts__ | `number (required)`: antalet källor från vilka texten samlades in. Default: `none`.
* __onClick__ | `function`: callback för vad som ska göras när du klickar på "Draw Venn Diagram".. Default: `onClick() {}`.
* __tdm__ | `array (required)`: "array" som ska representera en [termdokumentmatris] (https://en.wikipedia.org/wiki/Document-term_matrix).. Default: `none`.
* __vocabulary__ | `array (required)`: `array` i den ordning som `tdm`-matrisen har skickats så att indexen kan matchas till sina ord.. Default: `none`.
* __width__ | `number`: Venn-diagrammets bredd i pixlar. Default: `600`.


## Exempel

```jsx live
<LearnWordVennDiagram />
```

