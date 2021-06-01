---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Vennov diagram vizualizujúci spoluvýskyt slov v dokumentoch dodanej matice termov a dokumentov.

## Možnosti

* __height__ | `number`: výška Vennovho diagramu v pixeloch. Default: `350`.
* __nTexts__ | `number (required)`: počet zdrojov, z ktorých bol text zozbieraný. Default: `none`.
* __onClick__ | `function`: spätné volanie pre to, čo sa má vykonať po kliknutí na "Draw Venn Diagram".. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `mriežka`, ktorá má predstavovať [maticu termov a dokumentov](https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `array` v poradí odovzdaného poľa `tdm` tak, aby indexy zodpovedali ich slovám. Default: `none`.
* __width__ | `number`: šírka Vennovho diagramu v pixeloch. Default: `600`.


## Príklady

```jsx live
<LearnWordVennDiagram />
```

