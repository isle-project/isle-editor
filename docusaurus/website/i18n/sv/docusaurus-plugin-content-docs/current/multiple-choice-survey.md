---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

En enkätkomponent där läraren kan samla in flervalsdata från eleverna i realtid.

## Alternativ

* __question__ | `(string|node)`: sträng som anger den fråga som ska ställas till eleverna. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontrollerar om man vill låta eleverna besvara enkäten flera gånger eller inte.. Default: `false`.
* __anonymous__ | `boolean`: kontrollerar om elevernas svar anonymiseras. Default: `false`.
* __answers__ | `array`: en matris som anger svarsalternativ för eleverna. Default: `[]`.
* __multipleAnswers__ | `boolean`: anger om eleverna får välja mer än ett svar. Observera att detta skiljer sig från allowMultipleAnswers genom att allow gör det möjligt för eleverna att skicka in frågan flera gånger.. Default: `false`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onSubmit__ | `function`: funktion som ska anropas när ett svar lämnas in. Default: `onSubmit() {}`.


## Exempel

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

