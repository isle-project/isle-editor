---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Komponenta, která umožňuje skupině lidí hlasovat o váze a důležitosti daných možností.

## Možnosti

* __allowMultipleAnswers__ | `boolean`: kontroluje, zda si studenti přejí odpovídat na dotazník vícekrát.. Default: `false`.
* __anonymous__ | `boolean`: kontroluje, zda jsou odpovědi studentů anonymizovány.. Default: `false`.
* __colors__ | `array`: pole barev pro součásti koláčového grafu. Pokud není definována, použije se předdefinovaná barevná škála.. Default: `none`.
* __disabled__ | `boolean`: kontroluje, zda je průzkum deaktivován.. Default: `false`.
* __group__ | `string`: záhlaví zobrazení skupiny. Default: `'group results'`.
* __groupHeight__ | `number`: proporce výšky vstupu pro zobrazení skupiny (v px). Default: `100`.
* __legends__ | `array`: popisky v legendě, které popisují možnosti, které se mají zvážit.. Default: `[]`.
* __margin__ | `string`: podíl vstupní marže (v px). Default: `'40px'`.
* __onSubmit__ | `function`: funkce zpětného volání vyvolaná, jakmile studenti odešlou odpověď.. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proporce vstupní výšky pro jednotlivého žáka (v px). Default: `200`.
* __precision__ | `number`: zobrazená přesnost hodnot podílu. Default: `2`.
* __question__ | `(string|node)`: otázka, která se má zobrazit. Default: `''`.
* __step__ | `number`: krok šipek, které se zobrazí při najetí kurzoru nad vstupní pole.. Default: `0.25`.


## Příklady

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



