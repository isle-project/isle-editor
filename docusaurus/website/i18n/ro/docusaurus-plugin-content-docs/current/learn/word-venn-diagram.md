---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

O diagramă Venn care vizualizează co-ocurența cuvintelor în documentele unei matrice termen-document furnizate.

## Opțiuni

* __height__ | `number`: înălțimea diagramei Venn în pixeli. Default: `350`.
* __nTexts__ | `number (required)`: numărul de surse din care a fost cules textul. Default: `none`.
* __onClick__ | `function`: callback pentru ceea ce trebuie făcut atunci când se face clic pe "Desenează diagrama Venn". Default: `onClick() {}`.
* __tdm__ | `array (required)`: `array` care reprezintă o [matrice de documente de termeni](https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `array` în ordinea din matricea `tdm` transmisă, astfel încât indicii să poată fi potriviți cu cuvintele lor.. Default: `none`.
* __width__ | `number`: lățimea diagramei Venn în pixeli. Default: `600`.


## Exemple

```jsx live
<LearnWordVennDiagram vocabulary={[ 'hello', 'my', 'friend' ]} tdm={[{ "0": 1, "1": 1, "2": 1}, { "0": 1, "1": 0, "2": 1 }, { "0": 1, "1": 1, "2": 1}]} nTexts={2} />
```

