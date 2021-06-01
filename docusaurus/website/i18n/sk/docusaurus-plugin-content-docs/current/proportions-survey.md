---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Komponent, ktorý umožňuje skupine ľudí hlasovať o váhe a dôležitosti daných možností.

## Možnosti

* __allowMultipleAnswers__ | `boolean`: kontroluje, či si študenti želajú odpovedať na dotazník viackrát.. Default: `false`.
* __anonymous__ | `boolean`: kontroluje, či sú odpovede študentov anonymizované.. Default: `false`.
* __colors__ | `array`: pole farieb pre komponenty koláčového grafu. Ak nie je definovaná, použije sa preddefinovaná farebná škála. Default: `none`.
* __disabled__ | `boolean`: kontroluje, či je prieskum deaktivovaný.. Default: `false`.
* __group__ | `string`: záhlavie zobrazenia skupiny. Default: `'group results'`.
* __groupHeight__ | `number`: proporcie výšky vstupu pre zobrazenie skupiny (v px). Default: `100`.
* __legends__ | `array`: popisky, ktoré opisujú možnosti, ktoré sa majú zvážiť. Default: `[]`.
* __margin__ | `string`: pomerné vstupné rozpätie (v px). Default: `'40px'`.
* __onSubmit__ | `function`: spätné volanie vyvolané po odoslaní odpovede študentom. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proporcie vstupnej výšky pre jednotlivého žiaka (v px). Default: `200`.
* __precision__ | `number`: zobrazená presnosť hodnôt podielu. Default: `2`.
* __question__ | `(string|node)`: otázka, ktorá sa má zobraziť. Default: `''`.
* __step__ | `number`: krok šípok, ktoré sa zobrazia po nabehnutí kurzora nad vstupné pole. Default: `0.25`.


## Príklady

```jsx live
<ProportionsSurvey 
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



