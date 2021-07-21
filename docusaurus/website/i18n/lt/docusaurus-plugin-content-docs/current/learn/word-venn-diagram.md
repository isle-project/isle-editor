---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

Veno diagrama, kurioje vizualizuojamas žodžių sutapimas dokumentuose iš pateiktos terminų ir dokumentų matricos.

## Parinktys

* __height__ | `number`: Venno diagramos aukštis pikseliais. Default: `350`.
* __nTexts__ | `number (required)`: šaltinių, iš kurių surinktas tekstas, skaičius. Default: `none`.
* __onClick__ | `function`: grįžtamasis ryšys, skirtas tam, kas turi būti padaryta, kai spustelėjama "Draw Venn Diagram".. Default: `onClick() {}`.
* __tdm__ | `array (required)`: `dėžė`, kuri atvaizduoja [terminų dokumentų matricą](https://en.wikipedia.org/wiki/Document-term_matrix).. Default: `none`.
* __vocabulary__ | `array (required)`: `array` perduoto `tdm` masyvo tvarka, kad indeksai atitiktų jų žodžius.. Default: `none`.
* __width__ | `number`: Venno diagramos plotis pikseliais. Default: `600`.


## Pavyzdžiai

```jsx live
<LearnWordVennDiagram vocabulary={[ 'hello', 'my', 'friend' ]} tdm={[{ "0": 1, "1": 1, "2": 1}, { "0": 1, "1": 0, "2": 1 }, { "0": 1, "1": 1, "2": 1}]} nTexts={2} />
```

