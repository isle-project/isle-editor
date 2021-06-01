---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Vennov diagram, ki prikazuje sočasno pojavljanje besed v dokumentih iz matrike termin-dokument.

## Možnosti

* __height__ | `number`: višina Vennovega diagrama v pikslih. Default: `350`.
* __nTexts__ | `number (required)`: število virov, iz katerih je bilo zbrano besedilo.. Default: `none`.
* __onClick__ | `function`: povratni klic za tisto, kar je treba storiti, ko kliknete "Draw Venn Diagram".. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `mrežo`, ki bo predstavljala [matriko terminov in dokumentov](https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `array` v vrstnem redu posredovanega polja `tdm`, tako da se lahko indeksi ujemajo s svojimi besedami. Default: `none`.
* __width__ | `number`: širina Vennovega diagrama v pikslih. Default: `600`.


## Primeri

```jsx live
<LearnWordVennDiagram />
```

