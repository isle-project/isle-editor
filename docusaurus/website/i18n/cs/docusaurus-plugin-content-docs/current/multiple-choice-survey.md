---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Součást průzkumu, v níž může instruktor od studentů v reálném čase shromažďovat údaje z průzkumu s výběrem odpovědí.

## Možnosti

* __question__ | `(string|node)`: řetězec označující otázku, kterou chcete studentům položit. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontroluje, zda si studenti přejí odpovídat na dotazník vícekrát.. Default: `false`.
* __anonymous__ | `boolean`: kontroluje, zda jsou odpovědi studentů anonymizovány.. Default: `false`.
* __answers__ | `array`: pole označující možnosti odpovědí pro studenty. Default: `[]`.
* __multipleAnswers__ | `boolean`: označuje, zda studenti mohou vybrat více než jednu odpověď. Všimněte si, že se to liší od allowMultipleAnswers v tom, že allow umožňuje studentům odeslat otázku vícekrát.. Default: `false`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onSubmit__ | `function`: funkce, která se zavolá při odeslání odpovědi. Default: `onSubmit() {}`.


## Příklady

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

