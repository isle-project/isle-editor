---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Komponenta ISLE za vprašanja, pri katerih morajo učenci odgovarjati v obliki prostega besedila. Ta komponenta se od **vprašanja s prostim besedilom** razlikuje po tem, da so združeni podatki skupine prikazani vsem v realnem času.

## Možnosti

* __question__ | `(string|node)`: vprašanje, ki ga zastavite učencem.. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: nadzoruje, ali želimo učencem omogočiti, da na anketo odgovorijo večkrat.. Default: `false`.
* __anonymous__ | `boolean`: nadzoruje, ali se odgovori učencev zbirajo anonimno.. Default: `false`.
* __rows__ | `number`: število vrstic besedila v vnosnem polju. Default: `4`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onSubmit__ | `function`: funkcija povratne zveze, ki se pokliče, ko je poslan odgovor.. Default: `onSubmit() {}`.


## Primeri

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

