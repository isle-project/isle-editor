---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

A szavak együttes előfordulását megjelenítő Venn-diagram egy megadott kifejezés-dokumentum mátrix dokumentumaiban.

## Opciók

* __height__ | `number`: a Venn-diagram magassága pixelben. Default: `350`.
* __nTexts__ | `number (required)`: azon források száma, amelyekből a szöveget gyűjtötték. Default: `none`.
* __onClick__ | `function`: visszahívás arra, hogy mit kell tenni, ha a "Draw Venn Diagram" gombra kattintunk.. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `array`, amely egy [term document matrix](https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `array` az átadott `tdm` tömb sorrendjében, hogy az indexek a szavakhoz illeszkedjenek.. Default: `none`.
* __width__ | `number`: a Venn-diagram szélessége pixelben. Default: `600`.


## Példák

```jsx live
<LearnWordVennDiagram />
```

