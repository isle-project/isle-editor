---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Vstupní komponenta proporcí. Lze ji použít jako součást přístrojové desky ISLE nebo samostatně. V druhém případě chcete zpracovávat změny pomocí atributu `onChange` nebo vázat hodnotu na globální proměnnou pomocí atributu `bind`.

## Možnosti

* __colors__ | `array<string>`: pole barev pro součásti koláčového grafu. Pokud není definována, použije se vlastní barevná škála.. Default: `none`.
* __disabled__ | `boolean`: řídí, zda je vstupní pole deaktivováno. Default: `false`.
* __height__ | `number`: proporce vstupní výšky (v px). Default: `200`.
* __legends__ | `array`: štítky skupin. Default: `[]`.
* __onChange__ | `function`: funkce zpětného volání, která se vyvolá při volbě. Default: `onChange(){}`.
* __precision__ | `number`: zobrazená přesnost hodnot podílu. Default: `1`.
* __step__ | `number`: krok šipek, které se zobrazí při najetí kurzoru nad vstupní pole.. Default: `0.1`.


## Příklady

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

