---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Komponent prieskumu, v ktorom môže inštruktor zhromažďovať údaje z prieskumu s viacerými možnosťami odpovede od študentov v reálnom čase.

## Možnosti

* __question__ | `(string|node)`: reťazec označujúci otázku, ktorú treba položiť študentom. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontroluje, či si študenti želajú odpovedať na dotazník viackrát.. Default: `false`.
* __anonymous__ | `boolean`: kontroluje, či sú odpovede študentov anonymizované.. Default: `false`.
* __answers__ | `array`: pole s možnosťami odpovedí pre študentov. Default: `[]`.
* __multipleAnswers__ | `boolean`: uvádza, či študenti môžu vybrať viac ako jednu odpoveď. Všimnite si, že sa to líši od allowMultipleAnswers v tom, že allow umožňuje študentom odoslať otázku viackrát.. Default: `false`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onSubmit__ | `function`: funkcia, ktorá sa zavolá po odoslaní odpovede. Default: `onSubmit() {}`.


## Príklady

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

