---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Компонент за проучване, в който преподавателят може да събира цифрови данни от студентите в реално време.

## Опции

* __question__ | `(string|node)`: въпросът, който трябва да се покаже. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: контролира дали един и същ потребител (или сесия, ако е анонимен) може да подаде няколко отговора). Default: `false`.
* __anonymous__ | `boolean`: Позволява на учениците да подават данни анонимно. Имайте предвид, че ако тази опция е зададена на "true", преподавателите няма да могат да видят идентификатора на подаващия студент.. Default: `false`.
* __step__ | `(number|string)`: Стойност от `стринг` или `числова` стойност, указваща стъпката на стрелките, които се виждат при задържане на курсора над полето за въвеждане. Ако е `'any``, стъпката ще бъде зададена на `1`. Default: `'any'`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onSubmit__ | `function`: функция за обратна връзка, извикана, след като учениците подадат отговор. Default: `onSubmit() {}`.


## Примери

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

