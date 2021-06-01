---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Vhodna komponenta za deleže. Uporablja se lahko kot del armaturne plošče ISLE ali samostojno. V slednjem primeru želite obdelati spremembe s pomočjo atributa `onChange` ali vezati vrednost na globalno spremenljivko s pomočjo atributa `bind`.

## Možnosti

* __colors__ | `array<string>`: polje barv za komponente krožnega diagrama. Če ni določeno, se uporabi barvna lestvica po meri.. Default: `none`.
* __disabled__ | `boolean`: nadzoruje, ali je vnosno polje deaktivirano.. Default: `false`.
* __height__ | `number`: višina vnosa proporcev (v px). Default: `200`.
* __legends__ | `array`: skupinske oznake. Default: `[]`.
* __onChange__ | `function`: funkcija povratne zveze, ki se sproži ob izbiri.. Default: `onChange(){}`.
* __precision__ | `number`: prikazana natančnost vrednosti deležev. Default: `1`.
* __step__ | `number`: korak puščic, ki se prikažejo, ko se kazalec pomakne nad vnosno polje.. Default: `0.1`.


## Primeri

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

