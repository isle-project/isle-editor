---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Apklausos komponentas, kuriame dėstytojas realiuoju laiku gali rinkti studentų apklausos duomenis su keliais atsakymų variantais.

## Parinktys

* __question__ | `(string|node)`: eilutė, kurioje nurodomas klausimas, kurį reikia užduoti mokiniams.. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontroliuoja, ar norima leisti mokiniams į apklausą atsakyti kelis kartus.. Default: `false`.
* __anonymous__ | `boolean`: kontroliuoja, ar mokinių atsakymai yra anonimiški.. Default: `false`.
* __answers__ | `array`: masyvą, kuriame nurodomi mokinių atsakymų variantai.. Default: `[]`.
* __multipleAnswers__ | `boolean`: nurodoma, ar mokiniai gali pasirinkti daugiau nei vieną atsakymą. Atkreipkite dėmesį, kad tai skiriasi nuo allowMultipleAnswers tuo, kad allow leidžia mokiniams pateikti klausimą kelis kartus.. Default: `false`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onSubmit__ | `function`: funkcija, iškviečiama, kai pateikiamas atsakymas.. Default: `onSubmit() {}`.


## Pavyzdžiai

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

