---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Komponenta ankete, v kateri lahko inštruktor od študentov v realnem času zbira podatke iz ankete z več možnimi odgovori.

## Možnosti

* __question__ | `(string|node)`: niz, ki označuje vprašanje, ki ga je treba zastaviti učencem.. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: nadzoruje, ali želimo učencem omogočiti, da na anketo odgovorijo večkrat.. Default: `false`.
* __anonymous__ | `boolean`: nadzoruje, ali so odgovori učencev anonimizirani.. Default: `false`.
* __answers__ | `array`: polje, v katerem so navedene možnosti odgovorov za učence.. Default: `[]`.
* __multipleAnswers__ | `boolean`: označuje, ali lahko učenci izberejo več kot en odgovor. Upoštevajte, da se to razlikuje od možnosti allowMultipleAnswers, saj lahko učenci vprašanje pošljejo večkrat.. Default: `false`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onSubmit__ | `function`: funkcija, ki se pokliče ob predložitvi odgovora. Default: `onSubmit() {}`.


## Primeri

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

