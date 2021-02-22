---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Een venn diagram dat het samen voorkomen van woorden in documenten van een bijgeleverde term-document matrix visualiseert.

## Opties

* __height__ | `number`: hoogte van het Venn-diagram in pixels. Default: `350`.
* __nTexts__ | `number (required)`: aantal bronnen waaruit tekst is verzameld. Default: `none`.
* __onClick__ | `function`: callback voor wat er gedaan moet worden als "Teken Venn Diagram" wordt aangeklikt. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `array` dat is om een [term documentmatrix](https://en.wikipedia.org/wiki/Document-term_matrix) te vertegenwoordigen.. Default: `none`.
* __vocabulary__ | `array (required)`: `array` in de volgorde van de `tdm` array doorgegeven, zodat de indexen overeen kunnen komen met hun woorden. Default: `none`.
* __width__ | `number`: breedte van het Venn-diagram in pixels. Default: `600`.


## Voorbeelden

```jsx live
<LearnWordVennDiagram />
```

