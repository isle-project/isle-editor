---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

En komponent för proportioner. Kan användas som en del av en ISLE-instrumentpanel eller fristående. I det senare fallet vill du hantera ändringar via attributet `onChange` eller binda värdet till en global variabel via attributet `bind`.

## Alternativ

* __colors__ | `array<string>`: array med färger för pajdiagramkomponenterna. Om den inte är definierad används en egen färgskala.. Default: `none`.
* __disabled__ | `boolean`: kontrollerar om inmatningsfältet är inaktiverat. Default: `false`.
* __height__ | `number`: proportioner av inmatningshöjden (i px). Default: `200`.
* __legends__ | `array`: gruppbeteckningar.. Default: `[]`.
* __onChange__ | `function`: callback-funktion som ska anropas när ett val har gjorts. Default: `onChange(){}`.
* __precision__ | `number`: visad precision för proportionella värden. Default: `1`.
* __step__ | `number`: steg för de pilar som syns när markören svävar över inmatningsrutan. Default: `0.1`.


## Exempel

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

