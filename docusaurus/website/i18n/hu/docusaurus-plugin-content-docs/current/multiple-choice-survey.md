---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Egy olyan felmérési komponens, amelyben az oktató valós időben gyűjthet többszörös választási lehetőséggel ellátott felmérési adatokat a hallgatóktól.

## Opciók

* __question__ | `(string|node)`: a tanulóknak feltett kérdést jelző karakterlánc. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: szabályozza, hogy a tanulók többször is válaszolhassanak-e a felmérésre.. Default: `false`.
* __anonymous__ | `boolean`: ellenőrzi, hogy a diákok válaszai anonimizálásra kerülnek-e. Default: `false`.
* __answers__ | `array`: a tanulók válaszlehetőségeit jelző tömb. Default: `[]`.
* __multipleAnswers__ | `boolean`: jelzi, hogy a diákok egynél több választ is választhatnak-e. Vegye figyelembe, hogy ez annyiban különbözik az allowMultipleAnswers-től, hogy az allow lehetővé teszi a diákok számára, hogy a kérdést többször is elküldjék.. Default: `false`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onSubmit__ | `function`: a válasz elküldésekor meghívandó függvény. Default: `onSubmit() {}`.


## Példák

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

