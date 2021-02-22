---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Schemat venn wizualizujący współwystępowanie słów w dokumentach dostarczonej matrycy termin-dokument.

## Opcje

* __height__ | `number`: wysokość wykresu Venna w pikselach. Default: `350`.
* __nTexts__ | `number (required)`: liczba źródeł, z których zebrano tekst. Default: `none`.
* __onClick__ | `function`: Oddzwoń, aby dowiedzieć się, co należy zrobić po kliknięciu przycisku "Rysuj diagram Wenn".. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `array`, który ma reprezentować [matrycę dokumentów terminowych](https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `array` w kolejności tablicy `tdm` minął tak, że indeksy mogą być dopasowane do ich słów. Default: `none`.
* __width__ | `number`: szerokość wykresu Venna w pikselach. Default: `600`.


## Przykłady

```jsx live
<LearnWordVennDiagram />
```

