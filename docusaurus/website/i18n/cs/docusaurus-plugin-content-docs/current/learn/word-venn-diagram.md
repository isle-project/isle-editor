---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Vennův diagram vizualizující výskyt slov v dokumentech dodané matice termín-dokument.

## Možnosti

* __height__ | `number`: výška Vennova diagramu v pixelech. Default: `350`.
* __nTexts__ | `number (required)`: počet zdrojů, z nichž byl text získán. Default: `none`.
* __onClick__ | `function`: zpětné volání pro to, co se má provést po kliknutí na "Draw Venn Diagram".. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `mřížka`, která má představovat matici [term document matrix](https://en.wikipedia.org/wiki/Document-term_matrix).. Default: `none`.
* __vocabulary__ | `array (required)`: `array` v pořadí předaného pole `tdm` tak, aby indexy odpovídaly slovům.. Default: `none`.
* __width__ | `number`: šířka Vennova diagramu v pixelech. Default: `600`.


## Příklady

```jsx live
<LearnWordVennDiagram vocabulary={[ 'hello', 'my', 'friend' ]} tdm={[{ "0": 1, "1": 1, "2": 1}, { "0": 1, "1": 0, "2": 1 }, { "0": 1, "1": 1, "2": 1}]} nTexts={2} />
```

