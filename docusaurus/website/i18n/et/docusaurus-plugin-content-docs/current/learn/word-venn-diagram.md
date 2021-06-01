---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Venn-diagramm, mis visualiseerib sõnade koosesinemist esitatud terminidokumentide maatriksi dokumentides.

## Valikud

* __height__ | `number`: Venn diagrammi kõrgus pikslites. Default: `350`.
* __nTexts__ | `number (required)`: allikate arv, millest tekst koguti. Default: `none`.
* __onClick__ | `function`: callback, mida tuleb teha, kui klõpsatakse "Draw Venn Diagram".. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `array`, mis kujutab [terminidokumentide maatriksit](https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `array` edastatud `tdm` massiivi järjekorras, nii et indeksid võivad olla vastavuses nende sõnadega. Default: `none`.
* __width__ | `number`: Venn diagrammi laius pikslites. Default: `600`.


## Näited

```jsx live
<LearnWordVennDiagram />
```

