---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Венн диаграмма, визуализирующая соотт ветствие слов в документах поставляемой матрицы терминоо го документа.

## Варианты

* __height__ | `number`: высота диаграммы Венна в пикселях. Default: `350`.
* __nTexts__ | `number (required)`: количество источников, из которых был получен текст. Default: `none`.
* __onClick__ | `function`: обратный звонок о том, что делать, когда нажимается кнопка "Нарисовать диаграмму Венна". Default: `onClick() {}`.
* __tdm__ | `array (required)`: `массив`, представляющий собой [матрицу терминов в документе] (https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `массив` в порядке переданного массива `tdm`, чтобы индексы могли совпадать с их словами. Default: `none`.
* __width__ | `number`: ширина диаграммы Венна в пикселях. Default: `600`.


## Примеры

```jsx live
<LearnWordVennDiagram vocabulary={[ 'hello', 'my', 'friend' ]} tdm={[{ "0": 1, "1": 1, "2": 1}, { "0": 1, "1": 0, "2": 1 }, { "0": 1, "1": 1, "2": 1}]} nTexts={2} />
```

