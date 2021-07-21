---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Venn-diagrammi, joka havainnollistaa sanojen yhteisesiintymistä toimitetun termi-asiakirjamatriisin asiakirjoissa.

## Vaihtoehdot

* __height__ | `number`: Venn-diagrammin korkeus pikseleinä. Default: `350`.
* __nTexts__ | `number (required)`: niiden lähteiden lukumäärä, joista teksti on kerätty. Default: `none`.
* __onClick__ | `function`: callback sille, mitä tehdään, kun "Draw Venn Diagram" -painiketta napsautetaan.. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `array`, joka edustaa [termidokumenttimatriisia](https://en.wikipedia.org/wiki/Document-term_matrix).. Default: `none`.
* __vocabulary__ | `array (required)`: `array` välitetyn `tdm`-matriisin järjestyksessä, jotta indeksit voivat vastata sanojaan.. Default: `none`.
* __width__ | `number`: Venn-diagrammin leveys pikseleinä. Default: `600`.


## Esimerkkejä

```jsx live
<LearnWordVennDiagram vocabulary={[ 'hello', 'my', 'friend' ]} tdm={[{ "0": 1, "1": 1, "2": 1}, { "0": 1, "1": 0, "2": 1 }, { "0": 1, "1": 1, "2": 1}]} nTexts={2} />
```

