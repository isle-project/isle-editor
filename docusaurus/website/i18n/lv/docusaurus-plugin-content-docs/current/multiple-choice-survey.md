---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Aptaujas komponents, kurā pasniedzējs var vākt aptaujas datus ar atbilžu variantiem no studentiem reāllaikā.

## Iespējas

* __question__ | `(string|node)`: virkne, kurā norādīts jautājums, ko uzdot skolēniem.. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontrolē, vai skolēniem ir atļauts atbildēt uz aptaujas jautājumiem vairākas reizes.. Default: `false`.
* __anonymous__ | `boolean`: kontrolē, vai skolēnu atbildes ir anonimizētas.. Default: `false`.
* __answers__ | `array`: masīvs, kurā skolēniem norādītas atbilžu iespējas.. Default: `[]`.
* __multipleAnswers__ | `boolean`: norāda, vai skolēni var izvēlēties vairāk nekā vienu atbildi. Ņemiet vērā, ka tas atšķiras no allowMultipleAnswers ar to, ka allow ļauj skolēniem iesniegt jautājumu vairākas reizes.. Default: `false`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onSubmit__ | `function`: funkcija, kas jāizsauc, kad tiek iesniegta atbilde. Default: `onSubmit() {}`.


## Piemēri

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

