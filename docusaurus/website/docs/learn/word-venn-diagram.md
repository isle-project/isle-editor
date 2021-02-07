---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

A venn diagram visualizing co-occurrence of words in documents of a supplied term-document matrix.

## Examples

```jsx live
<LearnWordVennDiagram />
```

## Options

* __height__ | `number`: height of the Venn diagram in pixels. Default: `350`.
* __nTexts__ | `number (required)`: number of sources from which text was gathered. Default: `none`.
* __onClick__ | `function`: callback for what is to be done when "Draw Venn Diagram" is clicked. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `array` that is to represent a [term document matrix](https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `array` in the order of the `tdm` array passed so that the indices may be matches to their words. Default: `none`.
* __width__ | `number`: width of the Venn diagram in pixels. Default: `600`.
