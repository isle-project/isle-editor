---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

En komponent med proportioner af input. Kan bruges som en del af et ISLE-dashboard eller som en selvstændig komponent. I sidstnævnte tilfælde skal du håndtere ændringer via `onChange`-attributten eller binde værdien til en global variabel via `bind`-attributten.

## Indstillinger

* __colors__ | `array<string>`: array af farver til komponenterne i cirkeldiagrammet. Hvis den ikke er defineret, vil en brugerdefineret farveskala blive anvendt. Default: `none`.
* __disabled__ | `boolean`: kontrollerer, om inputfeltet er deaktiveret. Default: `false`.
* __height__ | `number`: proportioner indgangshøjde (i px). Default: `200`.
* __legends__ | `array`: gruppe etiketter. Default: `[]`.
* __onChange__ | `function`: callback-funktion, der skal påkaldes, når der er truffet et valg. Default: `onChange(){}`.
* __precision__ | `number`: viste præcision af proportionsværdier. Default: `1`.
* __step__ | `number`: det trin af pilene, der ses, når markøren svæver over indtastningsfeltet. Default: `0.1`.


## Eksempler

```jsx live
<ProportionsInput
    user
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```

