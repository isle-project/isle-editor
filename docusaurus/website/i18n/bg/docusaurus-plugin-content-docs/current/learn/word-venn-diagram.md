---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Диаграма на Вен, визуализираща съвместната поява на думи в документите от предоставената матрица термин-документ.

## Опции

* __height__ | `number`: височина на диаграмата на Вен в пиксели. Default: `350`.
* __nTexts__ | `number (required)`: брой на източниците, от които е събран текстът. Default: `none`.
* __onClick__ | `function`: обратна връзка за това, което трябва да се направи, когато се щракне върху "Draw Venn Diagram".. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `масив`, който представлява [матрица на термините и документите](https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `array` в реда на предадения масив `tdm`, така че индексите да могат да се съпоставят с думите си. Default: `none`.
* __width__ | `number`: ширина на диаграмата на Вен в пиксели. Default: `600`.


## Примери

```jsx live
<LearnWordVennDiagram />
```

