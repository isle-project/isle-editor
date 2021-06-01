---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

ISLE komponents jautājumiem, uz kuriem skolēniem atbildes jāsniedz brīvā teksta veidā. Šis komponents atšķiras no **FreeTextQuestion** ar to, ka apkopotie grupas dati tiek parādīti visiem reāllaikā.

## Iespējas

* __question__ | `(string|node)`: jautājums, ko uzdot skolēniem.. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontrolē, vai skolēniem ir atļauts atbildēt uz aptaujas jautājumiem vairākas reizes.. Default: `false`.
* __anonymous__ | `boolean`: kontrolē, vai skolēnu atbildes tiek vāktas anonīmi.. Default: `false`.
* __rows__ | `number`: teksta rindu skaits ievades laukā. Default: `4`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onSubmit__ | `function`: atgriezeniskā zvana funkcija, kas tiek izsaukta, kad ir iesniegta atbilde.. Default: `onSubmit() {}`.


## Piemēri

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

