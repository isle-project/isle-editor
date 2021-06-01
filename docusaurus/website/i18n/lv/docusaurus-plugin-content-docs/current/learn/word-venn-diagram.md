---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Venna diagramma, kas vizualizē vārdu līdzāspastāvēšanu dokumentos, kuri ir pievienoti terminu-dokumentu matricai.

## Iespējas

* __height__ | `number`: Venna diagrammas augstums pikseļos. Default: `350`.
* __nTexts__ | `number (required)`: avotu skaits, no kuriem tika iegūts teksts. Default: `none`.
* __onClick__ | `function`: atgriezeniskais zvans tam, kas jādara, kad ir noklikšķināts uz "Draw Venn Diagram".. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `mase`, kas atveido [terminu dokumentu matricu](https://en.wikipedia.org/wiki/Document-term_matrix).. Default: `none`.
* __vocabulary__ | `array (required)`: `array`, lai nodotā `tdm` masīva secībā indeksi atbilstu to vārdiem.. Default: `none`.
* __width__ | `number`: Venna diagrammas platums pikseļos. Default: `600`.


## Piemēri

```jsx live
<LearnWordVennDiagram />
```

