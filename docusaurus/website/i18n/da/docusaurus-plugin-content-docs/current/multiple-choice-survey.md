---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

En undersøgelseskomponent, hvor instruktøren kan indsamle data om multiple choice-undersøgelser fra de studerende i realtid.

## Indstillinger

* __question__ | `(string|node)`: streng, der angiver det spørgsmål, der skal stilles til eleverne. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: styrer, om man ønsker at tillade, at eleverne kan besvare undersøgelsen flere gange. Default: `false`.
* __anonymous__ | `boolean`: kontrollerer, om elevsvarene anonymiseres. Default: `false`.
* __answers__ | `array`: array med angivelse af svarmuligheder for de studerende. Default: `[]`.
* __multipleAnswers__ | `boolean`: angiver, om eleverne kan vælge mere end ét svar. Bemærk, at dette adskiller sig fra allowMultipleAnswers, idet allow gør det muligt for eleverne at indsende spørgsmålet flere gange.. Default: `false`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onSubmit__ | `function`: funktion, der skal kaldes, når der er afgivet et svar. Default: `onSubmit() {}`.


## Eksempler

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

