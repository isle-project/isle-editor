---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Vstupný komponent proporcií. Môže sa používať ako súčasť prístrojovej dosky ISLE alebo samostatne. V druhom prípade chcete spracovávať zmeny pomocou atribútu `onChange` alebo viazať hodnotu na globálnu premennú pomocou atribútu `bind`.

## Možnosti

* __colors__ | `array<string>`: pole farieb pre komponenty koláčového grafu. Ak nie je definovaná, použije sa vlastná farebná škála. Default: `none`.
* __disabled__ | `boolean`: kontroluje, či je vstupné pole deaktivované.. Default: `false`.
* __height__ | `number`: proporcie vstupnej výšky (v px). Default: `200`.
* __legends__ | `array`: skupinové štítky. Default: `[]`.
* __onChange__ | `function`: funkcia spätného volania, ktorá sa vyvolá po vykonaní voľby. Default: `onChange(){}`.
* __precision__ | `number`: zobrazená presnosť hodnôt podielu. Default: `1`.
* __step__ | `number`: krok šípok, ktoré sa zobrazia po nabehnutí kurzora nad vstupné pole. Default: `0.1`.


## Príklady

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

