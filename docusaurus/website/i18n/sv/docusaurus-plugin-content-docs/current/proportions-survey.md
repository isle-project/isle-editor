---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Komponent som gör det möjligt för en grupp människor att rösta om vikt och betydelse av givna alternativ.

## Alternativ

* __allowMultipleAnswers__ | `boolean`: kontrollerar om man vill låta eleverna besvara enkäten flera gånger eller inte.. Default: `false`.
* __anonymous__ | `boolean`: kontrollerar om elevernas svar anonymiseras. Default: `false`.
* __colors__ | `array`: array med färger för pajdiagramkomponenterna. Om den inte är definierad används en fördefinierad färgskala.. Default: `none`.
* __disabled__ | `boolean`: kontrollerar om undersökningen ska avaktiveras. Default: `false`.
* __group__ | `string`: rubrik för gruppvisning. Default: `'group results'`.
* __groupHeight__ | `number`: proportioner för inmatningshöjden för gruppvisningen (i px).. Default: `100`.
* __legends__ | `array`: Legendetiketter som beskriver de alternativ som ska vägas.. Default: `[]`.
* __margin__ | `string`: proportionell marginal för inmatning (i px). Default: `'40px'`.
* __onSubmit__ | `function`: callback-funktion som anropas när eleverna lämnar in ett svar. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proportioner av inmatningshöjden för en enskild elev (i px). Default: `200`.
* __precision__ | `number`: visad precision för proportionella värden. Default: `2`.
* __question__ | `(string|node)`: den fråga som ska visas. Default: `''`.
* __step__ | `number`: steg för de pilar som syns när markören svävar över inmatningsrutan. Default: `0.25`.


## Exempel

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



