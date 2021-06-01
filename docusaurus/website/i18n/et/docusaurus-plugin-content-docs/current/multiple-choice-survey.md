---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Küsitluskomponent, mille abil saab õppejõud koguda üliõpilastelt reaalajas valikvastustega küsitlusandmeid.

## Valikud

* __question__ | `(string|node)`: string, mis näitab õpilastele esitatavat küsimust. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontrollib, kas soovitakse, et õpilased saaksid vastata küsitlusele mitu korda.. Default: `false`.
* __anonymous__ | `boolean`: kontrollib, kas õpilaste vastused on anonüümsed. Default: `false`.
* __answers__ | `array`: massiivi, mis näitab õpilaste vastusevariante. Default: `[]`.
* __multipleAnswers__ | `boolean`: näitab, kas õpilased võivad valida rohkem kui ühe vastuse. Pange tähele, et see erineb allowMultipleAnswersist selle poolest, et allow võimaldab õpilastel esitada küsimuse mitu korda.. Default: `false`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onSubmit__ | `function`: funktsioon, mida kutsutakse üles, kui vastus esitatakse. Default: `onSubmit() {}`.


## Näited

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

