---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Компонент за проучване, в който преподавателят може да събира данни от проучването с няколко отговора от студентите в реално време.

## Опции

* __question__ | `(string|node)`: низ, който указва въпроса, който да се зададе на учениците. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: контролира дали желаете да позволите на учениците да отговарят на анкетата многократно.. Default: `false`.
* __anonymous__ | `boolean`: контролира дали отговорите на учениците са анонимни.. Default: `false`.
* __answers__ | `array`: масив, в който се посочват варианти на отговори за учениците.. Default: `[]`.
* __multipleAnswers__ | `boolean`: показва дали учениците могат да изберат повече от един отговор. Обърнете внимание, че това се различава от allowMultipleAnswers, тъй като allow дава възможност на учениците да изпращат въпроса многократно.. Default: `false`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onSubmit__ | `function`: функция, която да се извика при подаване на отговор. Default: `onSubmit() {}`.


## Примери

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

