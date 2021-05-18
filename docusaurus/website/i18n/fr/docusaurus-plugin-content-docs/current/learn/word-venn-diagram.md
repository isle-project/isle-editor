---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Un diagramme de Venn visualisant la cooccurrence des mots dans les documents d'une matrice terme-document fournie.

## Options

* __height__ | `number`: hauteur du diagramme de Venn en pixels. Default: `350`.
* __nTexts__ | `number (required)`: nombre de sources à partir desquelles le texte a été recueilli. Default: `none`.
* __onClick__ | `function`: rappel de ce qui doit être fait lorsque l'on clique sur "Dessiner le diagramme de Venn". Default: `onClick() {}`.
* __tdm__ | `array (required)`: qui doit représenter une [matrice de documents] (https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: tableau" dans l'ordre du tableau "tdm" passé afin que les indices puissent correspondre à leurs mots. Default: `none`.
* __width__ | `number`: largeur du diagramme de Venn en pixels. Default: `600`.


## Exemples

```jsx live
<LearnWordVennDiagram />
```

